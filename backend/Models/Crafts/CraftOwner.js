const mongoose = require('mongoose');
const validator = require("validator");

const dataSchema = new mongoose.Schema({
  ownerFName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  ownerLName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  ownerImage: {
    type: String
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    lowercase: true,
    required: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  ownerPhNumber: {
    unique: true,
    type: Number,
    required: [true, "Please enter your phone number"],
  },
  ownerLocation: {
    type: String,
    required: [true, "Please enter your location"],
  },
  craftName: {
    type: String,
    required: [true, "Please enter your craft name"],
  },
  password: {
    type: String,
    required: true,
    required: [true, "Please enter your password"],
  },
  ownerDescription: {
    type: String,
    required: [true, "Please tell as somthing about yourself"],
  },
  crafts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crafts' // Reference to the Crafts model
  }],
  product: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' // Reference to the Crafts model
  }]
});


module.exports = mongoose.model('CraftsOwner', dataSchema);
