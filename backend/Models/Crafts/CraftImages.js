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
    type: [String],
    required: true
  },
});

craftImagesSchema.set('primaryKey', 'CraftID');
module.exports = mongoose.model('CraftImages', craftImagesSchema);

