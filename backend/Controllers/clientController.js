const Client = require("./../Models/Client/ClientUser");
const bcrypt = require("bcrypt");
const { createTokens } = require("../JWT");
//REGISTER
const register = async (req, res) => {
  const newClient = new Client({
    fname: req.body.fname,
    lname: req.body.lname,
    image: req.body.image,
    email: req.body.email,
    password: (await bcrypt.hash(req.body.password, 10)).toString(),
    cardClientId: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
  });
  try {
    const savedClient = await newClient.save();
    res.status(201).json({
      msg: "Client Added Successfully",
      data: {
        client: savedClient,
      },
    });
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

module.exports = {
  register,
  login,
};
