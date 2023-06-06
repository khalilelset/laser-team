const mongoose = require("mongoose");
const validator = require("validator");

const CompanySchema = new mongoose.Schema({
  CompanyName: {
    type: String,
    required: [true, "Please enter your company name"],
    unique: true,
  },
  CompanyImage: {
    type: String,
    required: false,
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
  CompanyDescription: {
    type: String,
    required: true,
  },
  CompanyPhoneNumber: {
    type: String,
    required: true,
  },
  CompanyLocation: {
    type: String,
    required: true,
  },
  OpportunityID: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    //unique: true,
    //index: true,
    ref: "Opportunity",
  },
  RatingCraftID: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true,
    //unique: true,
    //index: true,
    ref: "CraftRating",
  },
});
module.exports = mongoose.model("Company", CompanySchema);
