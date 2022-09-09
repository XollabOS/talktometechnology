const express = require("express");
const {respondWithObject, respondWithFailure} = require("../serverHelpers/jsonResponses");
const defaultConfiguration = require("../defaults/defaultConfiguration");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = await (req.user);
        if (!user || !req.isAuthenticated?.()) {
            // console.log("Public/default configuration.");
            respondWithObject(res, defaultConfiguration);
        } else {
            // console.log("Personal configuration.");
        }
    } catch (e) {
        respondWithFailure(res, 504, e);
    }
});

module.exports = router;