const express = require("express");

const router = express.Router();
const {respondWithObject, respondWithFailure} = require("../serverHelpers/jsonResponses");

const defaultConfiguration = require("../defaults/defaultConfiguration");

router.get("/configuration", async (req, res) => {
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