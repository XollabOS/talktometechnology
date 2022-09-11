const express = require("express");
const {respondWithObject, respondWithFailure} = require("../serverHelpers/jsonResponses");
const defaultConfiguration = require("../defaults/defaultConfiguration");
const multerUploader = require("../config/multer");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = await (req.user);
        if (!user || !req.isAuthenticated?.()) {
            respondWithObject(res, defaultConfiguration);
        } else {
            // Temporary.
            respondWithObject(res, defaultConfiguration);
            // console.log("Personal configuration.");
        }
    } catch (e) {
        respondWithFailure(res, 504, e);
    }
});

router.post("/button", multerUploader.single("image"), async (req, res) => {
    const newImage = req.file;
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
});

module.exports = router;