const mongoose = require('mongoose');

const craftImagesSchema = new mongoose.Schema({
  CraftID: {
    type: Number,
    required: true,
    unique: true,
    index: true,
    ref: 'Crafts'
  },
  CraftImages: {
    type: String,
  },
});


module.exports = mongoose.model('CraftImages', craftImagesSchema);

