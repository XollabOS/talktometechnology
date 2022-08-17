const {app, mongoClient} = require("./api/config/server");
const express = require("express");

const mainRouter = express.Router();
app.use("/api", mainRouter);

mainRouter.use("/main", require("./api/routes/main"));