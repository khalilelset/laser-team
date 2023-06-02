const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  FName: {
    type: String,
    required: true,
  },
  LName: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

dataSchema.set("primaryKey", "CraftOwnerID"); // Set CraftOwnerID as the primary key

module.exports = mongoose.model("CraftsOwner", dataSchema);
