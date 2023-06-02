const mongoose = require('mongoose');

const craftImagesSchema = new mongoose.Schema({
  CraftID: {
    type:mongoose.Schema.Types.ObjectId,
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

