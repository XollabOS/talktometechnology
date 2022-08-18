const {app, mongoClient} = require("./api/config/server");
const express = require("express");
const path = require("path");

const mainRouter = express.Router();

app.use("/api", mainRouter);
mainRouter.use("/main", require("./api/routes/main"));

app.use("/assets", express.static(path.join(__dirname, "assets")));