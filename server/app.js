const express = require("express");
const mongoose = require("mongoose");
const app = express();

const authRoutes = require("../../../api/routes/auth");
const eventRoutes = require("../../../api/routes/events");
const keys = require("../../../api/config/keys");

const passport = require("passport");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB created"))
  .catch((e) => console.log(e));

app.use(passport.initialize());
require("../../../api/middleware/passport")(passport);

app.use(require("morgan")("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(require("cors")());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

module.exports = app;
