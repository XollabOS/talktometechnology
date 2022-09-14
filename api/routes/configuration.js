const express = require("express");
const {respondWithObject, respondWithFailure} = require("../serverHelpers/jsonResponses");
const defaultConfiguration = require("../defaults/defaultConfiguration");
const multerUploader = require("../config/multer");
const cloudinary = require("../config/cloudinary");
const fs = require("fs").promises;
const UserButton = require("../models/UserButton");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = req.user;
        if (!user || !req.isAuthenticated?.()) {
            respondWithObject(res, defaultConfiguration);
        } else {
            const userButtons = await UserButton.find({
                userID: user._id.toString(),
            }).lean();
            respondWithObject(res, userButtons);
        }
    } catch (e) {
        respondWithFailure(res, {
            code: 504,
            error: e,
        });
    }
});

router.post("/button", multerUploader.single("image"), async (req, res) => {
    const newImage = req.file;
    const currentUser = req.user;
    if (!currentUser) {
        respondWithFailure(res, {
            code: 403,
            error: null,
            reason: "You must have an account to be able to add a button to our servers.",
        });
    }
    try {
        const uploadResult = await cloudinary.uploader.upload(newImage.path);
        await UserButton.create({
            title: req.body.title,
            imageSrc: uploadResult.secure_url,
            cloudinaryID: uploadResult.public_id,
            imageAlt: req.body.imageAlt,
            bgColor: req.body.bgColor,
            textColor: req.body.textColor,
            userID: currentUser._id,
        });
        respondWithObject(res, {
            success: true,
            reason: null,
        })
    } catch (e) {
        console.error(e);
        respondWithFailure(res, {
            code: 500,
            error: e,
            reason: "Server error."
        })
    } finally {
        try {
            await fs.rm(newImage.path);
        } catch (e) {
        }
    }
});

router.delete("/button", async (req, res) => {
    try {
        const currentUser = req.user;
        if (!currentUser) {
            respondWithFailure(res, {
                code: 403,
                error: null,
                reason: "You must be signed in to delete a custom button.",
            });
        }
        const userButton = await UserButton.findOne({_id: req.body.id});
        if (userButton.userID !== req.user._id.toString()) {
            respondWithFailure(res, {
                code: 403,
                error: null,
                reason: "This custom button belongs to another user, and you can't delete it.",
            });
        }
        const assetIDToDelete = userButton.cloudinaryID;
        if (assetIDToDelete) {
            console.log(await cloudinary.uploader.destroy(assetIDToDelete));
        }
        await UserButton.remove({_id: req.body.id});
        respondWithObject(res, {});
    } catch (e) {
        respondWithFailure(res);
    }
})

module.exports = router;