const express = require("express");

const router = express.Router();

router.use("/configuration", require("./configuration"));
router.use("/auth", require("./auth"));

module.exports = router;