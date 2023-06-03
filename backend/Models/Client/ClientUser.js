const mongoose = require("mongoose");
const validator = require("validator");

const dataSchema = new mongoose.Schema({
  cardClientId: {
    type: Number,
    unique: true,
  },
  FName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  LName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  Image: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
  },
});

module.exports = mongoose.model("ClientUser", dataSchema);
