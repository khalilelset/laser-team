const Client = require("./../Models/Client/Client");
const Cart = require("./../Models/Client/Cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createTokens, extractIdFromToken } = require("../JWT");
//REGISTER
const register = async (req, res) => {
  try {
    const { fname, lname, email, password, image , cartClientId} = req.body;
    const oldClient = await Client.findOne({ email: email });
    if (oldClient) {
      res.status(201).json({ msg: "Email Already Used By Another Client" });
    } else {
      const clientCart = new Cart();
      clientCart.save();
      //3am 2a3mela encryption 
     /* const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);*/
      const newClient = new Client({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        image: image,       
        cartClientId: clientCart._id,
      });

      const savedClient = await newClient.save();
      const accessToken = createTokens(savedClient);
      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
      });
      res.status(200).json({
        msg: "Client Added Successfully",
        data:savedClient,
      });
    }
  } catch (error) {
    
    res.status(500).json({ error: error });
  }
};

//LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const client = await Client.findOne({ email: email });
    if (!client) {
      return res.status(401).json({ msg: "Something Wrong" });
    } else {
      const dbPassword = client.password;
      bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          return res.status(400).json({ msg: "Something wrong" });
        }
        const accessToken = createTokens(client);
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
  res.status(200).json({ msg: "Please Login First" });
};

// Get Info
const getUserInfo = async (req, res) => {
  try {
    const token = req.cookies && req.cookies["access-token"];
    if (!token) {
      return res.status(400).json({ error: "User Not Authenticated!" });
    }
    const userInfo = extractIdFromToken(token);
    const { id } = userInfo;
    const client = await Client.findById(id);
    res.status(200).json({ data: client });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  register,
  login,
  logout,
  getUserInfo,
};



