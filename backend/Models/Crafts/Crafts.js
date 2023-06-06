const mongoose = require('mongoose');

const craftSchema = new mongoose.Schema({
  craftOwnerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'CraftsOwner' // Reference to the CraftsOwner model
  },
  craftTitle: {
    type: String,
    required: true
  },
  mainCraftImage: {
    type: String,
    // required: true
  },
  craftDescription: {
    type: String,
    required: true
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    
    ref: 'CraftCategory' // Reference to the CraftCategory model
  },
  craftImage: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CraftImages' 
  }],
  craftRate:{
    type: Number,
  }
});

module.exports = mongoose.model('Crafts', craftSchema);
