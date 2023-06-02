const mongoose = require('mongoose');

const rateCraftSchema = new mongoose.Schema({
  CraftID: {
    type: Number,
    required: true,
    ref: 'Crafts' // Reference to the Crafts model
  },
  Rating: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('RateCraft', rateCraftSchema);
