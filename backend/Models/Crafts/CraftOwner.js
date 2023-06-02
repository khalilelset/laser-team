const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  OwnerFName: {
    type: String,
    required: true
  },
  OwnerLName: {
    type: String,
    required: true
  },
  OwnerImage: {
    type: String
  },
  Email: {
    type: String,
    required: true
  },
  OwnerPhNumber: {
    type: Number,
    required: true
  },
  OwnerLocation: {
    type: String,
    required: true
  },
  CraftName: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  OwnerDescription: {
    type: String,
    required: true
  },
  Crafts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crafts' // Reference to the Crafts model
  }],
  Product: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' // Reference to the Crafts model
  }]
});


module.exports = mongoose.model('CraftsOwner', dataSchema);
