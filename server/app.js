const express = require("express");
const mongoose = require("mongoose");
const app = express();

const authRoutes = require("../../../server/routes/auth");
const eventRoutes = require("../../../server/routes/events");
const keys = require("../../../server/config/keys");

const passport = require("passport");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB created"))
  .catch((e) => console.log(e));

app.use(passport.initialize());
require("../../../server/middleware/passport")(passport);

app.use(require("morgan")("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(require("cors")());

app.use("/server/auth", authRoutes);
app.use("/server/events", eventRoutes);

module.exports = app;
