const mongoose = require("mongoose");

let database = new mongoose.Mongoose();
let dbname = "userdata";
let parameters = "?retryWrites=true&w=majority";
let dbConnectionString;

if (process.env.MODE === "production") {
    dbConnectionString = process.env.MONGODB_URI_PRODUCTION + dbname + parameters;
} else {
    dbConnectionString = process.env.MONGODB_URI_DEVELOPMENT + dbname + parameters;
}

database.connect(dbConnectionString).catch(e => {
    console.log(e.message);
    process.exit();
});

module.exports = {
    database,
    dbConnectionString
};