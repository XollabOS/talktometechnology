const mongoose = require("mongoose");
const database = require("../config/database").database;

const UserButtonSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    imageSrc: {
        required: true,
        type: String,
    },
    imageAlt: {
        type: String,
    },
    bgColor: {
        type: String,
        required: true,
        default: "#ffffff",
    },
    textColor: {
        type: String,
        required: true,
        default: "#000000",
    },
    userID: {
        type: String,
        required: true,
    }
});

const UserButton = database.model("userButtons", UserButtonSchema);

module.exports = UserButton;