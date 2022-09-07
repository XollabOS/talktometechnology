const express = require("express");
const {respondWithObject, respondWithFailure} = require("../serverHelpers/jsonResponses");
const defaultConfiguration = require("../defaults/defaultConfiguration");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = await (req.user);
        if (!user || !req.isAuthenticated?.()) {
            respondWithObject(res, defaultConfiguration);
        }
    } catch (e) {
        respondWithFailure(res, 504, e);
    }
});

module.exports = router;