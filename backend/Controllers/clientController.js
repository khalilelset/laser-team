const Client = require("./../Models/Client/Client");
const Cart = require("./../Models/Client/Cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createTokens, extractIdFromToken } = require("../JWT");
//REGISTER
const register = async (req, res) => {
  try {
    const oldClient = await Client.findOne({ email: req.body.email });
    if (oldClient) {
      res.status(201).json({ msg: "Email Already Used By Another Client" });
    } else {
      const clientCart = new Cart();
      clientCart.save();
      const newClient = new Client({
        fname: req.body.fname,
        lname: req.body.lname,
        image: req.body.image,
        email: req.body.email,
        password: (await bcrypt.hash(req.body.password, 10)).toString(),
        cartClientId: clientCart._id,
      });

      const savedClient = await newClient.save();
      const accessToken = createTokens(savedClient);
      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
      });
      res.status(201).json({
        msg: "Client Added Successfully",
        data: {
          client: savedClient,
        },
      });
    }
  } catch (err) {
    res.status(500).json(err);
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
