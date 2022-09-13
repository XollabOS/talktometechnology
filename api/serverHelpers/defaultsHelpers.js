const UserButtons = require("../models/UserButton");
const defaultConfiguration = require("../defaults/defaultConfiguration");

async function loadButtonDefaultsForNewUser(id) {
    await UserButtons.insertMany(defaultConfiguration.map(button => ({
        ...button,
        userID: id,
    })));
}

module.exports = {
    loadButtonDefaultsForNewUser
};