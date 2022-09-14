const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const database = require("../config/database").database;

const NameSchema = new mongoose.Schema({
    givenName: {
        required: true,
        type: String,
    },
    familyName: {
        required: true,
        type: String,
    }
})

// Note: Users are identified by email, so that it's the same account when they use Google OAuth 2.0 or manually login.
const UsersSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: () => "/assets/profile/default/profilePicture.png",
    },
    displayName: {
        type: String,
        required: true,
    },
    name: {
        type: NameSchema,
        required: true,
    },
});

UsersSchema.pre("save", async function save(next) {
    const currentUser = this;
    if (!currentUser.isModified("password")) {
        return next();
    } else {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(currentUser.password, salt);
            currentUser.password = hash;
            return next();
        } catch (e) {
            return next(e);
        }
    }
});

UsersSchema.methods.comparePassword = async function comparePassword(candidate) {
    return await bcrypt.compare(candidate, this.password);
}

const User = database.model("Users", UsersSchema);

module.exports = User;