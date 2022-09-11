// Environment setup.
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path: path.join(__dirname, "config.env")});

// Database setup.
const database = require("./database").database;
console.log("Connecting to MongoDB server.");

// Servers and middlewares.
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Authorization middleware and session login.
const addAuthorization = require("./passport");
addAuthorization(app);

let PORT = process.env.PORT || process.env.PORT_DEVELOPMENT;
if (process.env.MODE !== "production") {
    PORT = process.env.PORT_DEVELOPMENT;
}

app.listen(PORT, () => {
   console.log("Listening at port " + PORT);
});

module.exports = {app};