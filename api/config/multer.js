let multer = require("multer");
let path = require("path");

const VALID_EXT_NAMES = [".png", ".jpeg", ".jpg"];
const MAX_MEGABYTES_ALLOWED = 5;

module.exports = multer({
    dest: path.join(__dirname, "..", "tmp", "uploads"),
    fileFilter(req, file, callback) {
        let ext = path.extname(file.originalname);
        if (!VALID_EXT_NAMES.includes(ext)) {
            callback(new Error(`File must be one of these types: ${VALID_EXT_NAMES.join(", ")}`), false);
        } else if (file.size >= MAX_MEGABYTES_ALLOWED * 1024 ** 2) {
            callback(new Error(`File must be smaller than ${MAX_MEGABYTES_ALLOWED} megabytes.`), false);
        } else {
            callback(null, true);
        }
    },
});