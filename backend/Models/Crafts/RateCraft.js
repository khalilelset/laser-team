const mongoose = require('mongoose');

const rateCraftSchema = new mongoose.Schema({
  RateCraftID: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  CraftID: {
    type: Number,
    required: true,
    ref: 'Crafts' // Reference to the Crafts model
  },
  Rating: {
    type: [Number],
    required: true
  },
});

rateCraftSchema.set('primaryKey', 'RateCraftID');
module.exports = mongoose.model('RateCraft', rateCraftSchema);
