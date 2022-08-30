// Environment setup.
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
dotenv.config({path: path.join(__dirname, "config.env")});

// Database setup.
const mongoClient = require("./database");
console.log("Connecting to MongoDB server.");

// Servers and middlewares.
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

let PORT = process.env.PORT || process.env.PORT_DEVELOPMENT;
if (process.env.MODE !== "production") {
    PORT = process.env.PORT_DEVELOPMENT;
    app.use(morgan("dev"));
}

app.listen(PORT, () => {
   console.log("Listening at port " + PORT);
});

module.exports = {app, mongoClient};