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
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const craftsOwner = new CraftsOwner({
      ownerFName,
      ownerLName,
      email,
      ownerPhNumber,
      ownerLocation,
      craftName,
      password: hashedPassword,
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
   
    const owner = await CraftsOwner.findOne({ email: email });

    if (!owner) {
      return res.status(401).json({ error: { message: "Email Faild" } });
    } else {
      const dbPassword = owner.password;

      bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          return res.status(401).json({ error: { message: "password Faild" } });
        }
        const accessToken = createTokens(owner);
        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
        });
        res.status(200).json({ msg: "You are Logged In", token: accessToken });
      });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//LOGOUT
const logout = (req, res) => {
  res.clearCookie("access-token");
  res.status(200).json({ message: "you are loging out" });
};


// update craft owner profile
const updateowner = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await CraftsOwner.findByIdAndUpdate(
    id, updatedData, options
    )
    res.send(result)
    }
    catch (error) {
    res.status(400).json({ message: error.message })
    }
    }       



module.exports = { signUp ,login,logout , updateowner};
