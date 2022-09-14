const express = require("express");
const morgan = require("morgan");

const router = express.Router();

if (process.env.MODE !== "production") {
    router.use(morgan("dev"));
}
router.use("/configuration", require("./configuration"));
router.use("/auth", require("./auth"));

module.exports = router;