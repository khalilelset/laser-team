const CraftsOwner = require("../../Models/Crafts/CraftOwner");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createTokens, extractIdFromToken } = require("../../JWT");
const validator = require("validator");
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
      ownerImage,
    } = req.body;

    if (!ownerFName || !ownerLName) {
      return res.status(400).json({ error: { message:"the full name is required !!"} });
    }
    if (!validator.isEmail(email) || !email) {
      return res.status(400).json({ error: { message: "Invalid email address."} });
    }
    const oldCraft = await CraftsOwner.findOne({ email: email });
    if (oldCraft) {
      return res.status(400).json({
        error: { message: "Email Already Used By Another Craft owner" },
      });
    }

    if (!ownerLocation) {
      return res.status(400).json({ error:{ message: "location is required" }});
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: {
          message:
            "Password must be at least 8 characters and contain at least 1 uppercase letter  1 number and 1 special character.",
        },
      });
    }
    const lebanonPhoneNumberRegex = /^[0-9]{8}$/;
    if (!lebanonPhoneNumberRegex.test(ownerPhNumber)) {
      return  res
        .status(400)
        .json({ error: { message: "Please Enter a Lebanon Number" } });
    } 
    const oldphone = await CraftsOwner.findOne({
      ownerPhNumber: ownerPhNumber,
    });
    if (oldphone) {
      return  res.status(400).json({ error: { message: "PhoneNumber Already exist" } });
    }
    else {
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
        ownerImage,
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
    }
  } catch (error) {
      console.error("Error in signUp:", error);
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

module.exports = { signUp, login, logout };
