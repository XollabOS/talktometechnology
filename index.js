const {app} = require("./api/config/server");
const express = require("express");
const path = require("path");

app.use("/api", require("./api/routes/main"));
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Vite redirect.
app.get("/", (req, res) => res.redirect("http://localhost:5173"));