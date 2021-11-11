const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  id: {
    type: Number,
    default: Date.now(),
  },

  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Number,
    default: Date.now(),
  },
  title: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("events", eventSchema);
