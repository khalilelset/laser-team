const mongoose = require('mongoose');

const OpportunityCategorySchema = new mongoose.Schema({
    OpportunityCategoryName: {
        type: String,
        required: true,
        unique: true,
    },
})
module.exports = mongoose.model('OpportunityCategory', OpportunityCategorySchema)