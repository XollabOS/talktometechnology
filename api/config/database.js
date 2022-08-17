const mongoose = require("mongoose");

let mongoClient;
if (process.env.MODE === "production") {
    mongoClient = mongoose.createConnection(process.env.MONGODB_URI_PRODUCTION);
} else {
    mongoClient = mongoose.createConnection(process.env.MONGODB_URI_DEVELOPMENT);
}

module.exports = mongoClient;