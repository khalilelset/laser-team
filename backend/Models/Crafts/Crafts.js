const mongoose = require('mongoose');

const craftSchema = new mongoose.Schema({
  CraftOwnerID: {
    type: mongoose.Schema.Types.ObjectId,
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
  CraftImage: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CraftImages' 
  }],
  CraftRate:{
    type: Number,
  }
});

module.exports = mongoose.model('Crafts', craftSchema);
