const mongoose = require('mongoose');

const craftcatSchema = new mongoose.Schema({
  CategoryID: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  CategoryName: {
    type: String,
    required: true,
  },
});

craftcatSchema.set('primaryKey', 'CategoryID');
module.exports = mongoose.model('RateCraft', craftcatSchema);
