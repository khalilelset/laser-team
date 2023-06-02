const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  CraftOwnerID: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
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
  OwnerDescription: {
    type: String,
    required: true
  }
});

dataSchema.set('primaryKey', 'CraftOwnerID'); // Set CraftOwnerID as the primary key

module.exports = mongoose.model('CraftsOwner', dataSchema);
