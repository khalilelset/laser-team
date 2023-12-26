const mongoose = require("mongoose");
const validator = require("validator");

const dataSchema = new mongoose.Schema({
  cartClientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  fname: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lname: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    // unique: true,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },

  status: {
    type: String,
    default: "client",
  },
});

module.exports = mongoose.model("client", dataSchema);
