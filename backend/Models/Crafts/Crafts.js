const mongoose = require('mongoose');

const craftSchema = new mongoose.Schema({
  CraftID: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  CraftOwnerID: {
    type: Number,
    required: true,
    ref: 'CraftsOwner' // Reference to the CraftsOwner model
  },
  CraftTitle: {
    type: String,
    required: true
  },
  MainCraftImage: {
    type: String,
    required: true
  },
  CraftDescription: {
    type: String,
    required: true
  },
  CategoryID: {
    type: Number,
    required: true,
    ref: 'CraftCategory' // Reference to the CraftCategory model
  },
  CraftImageID: {
    type: Number,
    required: true
  },
  RateCraftID: {
    type: Number,
    required: true
  }
});

craftSchema.set('primaryKey', 'CraftID');
module.exports = mongoose.model('Crafts', craftSchema);
