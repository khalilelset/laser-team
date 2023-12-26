const Client = require("./../Models/Client/Client");
const Cart = require("./../Models/Client/Cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createTokens, extractIdFromToken } = require("../JWT");

//REGISTER
const register = async (req, res) => {
  try {
    const { fname, lname, email, password, image, cartClientId } = req.body;
    const oldClient = await Client.findOne({ email: email });
    if (!fname || !lname) {
      return res
        .status(400)
        .json({ error: { message: "the full name is required !!" } });
    }
    if (!validator.isEmail(email) || !email) {
      return res
        .status(400)
        .json({ error: { message: "Invalid email address." } });
    }
    if (oldClient) {
      res.status(409).json({
        error: { message: "Email Already Used By Another Client" },
      });
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      res
        .status(400)
        .json({
          error: {
            message:
              "Password must be at least 8 characters and contain at least 1 uppercase letter, 1 number, and 1 special character.",
          },
        });
    } else {
      const clientCart = new Cart();
      clientCart.save();
      //3am 2a3mela encryption
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newClient = new Client({
        fname: fname,
        lname: lname,
        email: email,
        password: hashedPassword,
        image: image,
        cartClientId: clientCart._id,
      });

      const savedClient = await newClient.save();
      const accessToken = createTokens(savedClient);
      res.status(200).json({
        msg: "Client Added Successfully",
        data: savedClient,
        token: accessToken,
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
      return res.status(401).json({ error: { message: "Email Faild" } });
    } else {
      const dbPassword = client.password;
      bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          return res.status(400).json({ error: { message: "password faild" } });
        }
        const accessToken = createTokens(client);
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
  res.status(200).json({ msg: "Please Login First" });
};

// Get Info
const getUserInfo = async (req, res) => {
  const clientem = req.params.email;
  const client = await Client.findOne({ email: clientem });
  try {
    if (!client) {
      return res.status(404).json({ error: { message: "Client not found" } });
    }
    res.status(200).json({ client });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update

const updateclient = async (req, res) => {
  try {
    const clientemail = req.params.email; // Retrieve email from URL parameters

    const client = await Client.findOneAndUpdate(
      { email: clientemail },
      { $set: req.body },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ error: { message: "client not found" } });
    }
    console.log("meshi l7al client");
    res.status(200).json({ client });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Info
/*
const getInfo = async (req, res) => {
  try {
    const token = req.cookies && req.cookies["access-token"];
    if (!token) {
      return res.status(400).json({ error: "User Not Authenticated!" });
    }
    const userInfo = extractIdFromToken(token);
    const { id , status } = userInfo;
    
    res.status(200).json({ data: userInfo });
    console.log(data)
  } catch (error) {
    res.status(500).json({ error: error });
  }
};*/

module.exports = {
  register,
  login,
  logout,
  getUserInfo,
  updateclient,
};
