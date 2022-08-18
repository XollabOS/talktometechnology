const mongoose = require("mongoose");
const {mongoClient} = require("../config/database");


const usersSchema = new mongoose.Schema({
    _id: {
        required: true,
    },
    googleId: {

    }
});