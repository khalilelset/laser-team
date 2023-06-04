const mongoose = require('mongoose');

const OpportunitySchema = new mongoose.Schema({
    OpportunityTitle: {
        type: String,
        required: [true, "Please enter your opportunity title"],
    },
    OpportunityImage: {
        type: String,
        required: false,
    },
    OpportunityDescrition: {
        type: String,
        required: true,
    },
    OpportunitySalary: {
        type: Number,
        required: true,
    },
    OpportunityCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'OpportunityCategory' // Reference to the OpportunityCategory model
    },
})
module.exports = mongoose.model('Opportunity', OpportunitySchema)