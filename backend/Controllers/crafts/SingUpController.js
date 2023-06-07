const CraftsOwner = require('../../Models/Crafts/CraftOwner');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createTokens } = require("../../JWT");

const signUp = async (req, res) => {
  try {
    const {
      ownerFName,
      ownerLName,
      email,
      ownerPhNumber,
      ownerLocation,
      craftName,
      password,
      ownerDescription,
      ownerImage
    } = req.body;
    const oldCraft = await CraftsOwner.findOne({ email: email });
    // Create a new CraftsOwner instance
    if(oldCraft){ res.status(201).json({ msg: "Email Already Used By Another Craft Owner" });}
    else{
      const craftsOwner = new CraftsOwner({
      ownerFName,
      ownerLName,
      email,
      ownerPhNumber,
      ownerLocation,
      craftName,
      password,
      ownerDescription,
      ownerImage
    });

    // Save the CraftsOwner to the database
    const savedCraftsOwner = await craftsOwner.save();

    res.status(201).json({
      craftsOwner: savedCraftsOwner,
    });
  }} catch (error) {
    res.status(400).json({ error: error.message });
    console.log("controller sign up error");
  }
};

module.exports = { signUp };
