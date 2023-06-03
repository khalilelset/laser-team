const mongoose = require('mongoose');

const craftImagesSchema = new mongoose.Schema({
  craftID: {
    type:mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    index: true,
    ref: 'Crafts'
  },
  craftImages: {
    type: String,
  },
});


module.exports = mongoose.model('CraftImages', craftImagesSchema);

