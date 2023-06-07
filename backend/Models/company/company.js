const mongoose = require("mongoose");
const validator = require("validator");

const CompanySchema = new mongoose.Schema({
    CompanyID: {
        type: Number,
        // unique: true,
    },
    CompanyName: {
        type: String,
        required: [true, "Please enter your company name"],
        unique: [true, "this name is used"]
    },
    CompanyImage: {
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
    CompanyDescription: {
        type: String,
        required: [true, "Please add a description to you company"],
        maxlength: 5000,
    },
    CompanyPhNumber: {
        type: String,
        required: true,
    },
    CompanyLocation: {
        type: String,
        required: true,
    },
    OpportunityId: [{
        type: Number,
        unique: true,
        ref: "Opportunity",
    }],
    RatingCraftId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RateCraft",
    }]
})

const company = mongoose.model("company", CompanySchema);
module.exports = company;