const CraftsOwner = require('../../Models/Crafts/CraftOwner');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createTokens, extractIdFromToken } = require("../../JWT");

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
    const oldphone = await CraftsOwner.findOne({ ownerPhNumber: ownerPhNumber });
    // Create a new CraftsOwner instance
    if (oldphone) {
      res.status(409).json({ error: { message: "PhoneNumber Already exist" } });
    }
        
    if (oldCraft) {
      res.status(409).json({ error: { message: "Email Already Used By Another Craft owner" } });
    }
    
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
    const accessToken = createTokens(savedCraftsOwner);

    res.cookie("access-token", accessToken, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
    });
    res.status(201).json({
      craftsOwner: savedCraftsOwner,
    });
  }} catch (error) {
    res.status(500).json({ error: error });
    
  }
};

//LOGIN

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const CraftsOwner = await CraftsOwner.findOne({ email: email });
    if (!CraftsOwner) {
      return  res.status(401).json({ error: { message: "Email not found" } });
    } else {
      const dbPassword = CraftsOwner.password;
      bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          return res.status(401).json({ error: { message: "false password" } });
        }
        const accessToken = createTokens(CraftsOwner);
        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
        });
        res.status(200).json({ msg: "You are Logged In", token: accessToken });
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//LOGOUT
const logout = (req, res) => {
  res.clearCookie("access-token");
  res.status(200).json({ message: "you are loging out" });
};








module.exports = { signUp ,login,logout };
