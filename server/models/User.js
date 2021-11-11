const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id:{
    type: Number,
    default: Date.now()
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model("users", userSchema);
