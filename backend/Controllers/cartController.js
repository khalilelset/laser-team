const Cart = require("./../Models/Client/Cart");
const Product = require("./../Models/Crafts/Product");
const ProductsInCart = require("./../Models/Client/productsInCart");
const Client = require("./../Models/Client/Client");
const { getTokenPayload, extractIdFromToken } = require("./../JWT");
const jwt = require("jsonwebtoken");

const addProductToCart = async (req, res) => {
  try {
    // const addedProduct = Product.findById(req.params.prodId);
    // if (!addedProduct) {
    //   return res.status(404).json({ error: "Product not found" });
    // }
    const token = req.cookies && req.cookies["access-token"];
    if (!token) {
      return res.status(400).json({ error: "User Not Authenticated!" });
    }
    const userInfo = extractIdFromToken(token);
    if (userInfo) {
      const { id } = userInfo;
      const client = await Client.findById(id);
      if (!client) {
        return res.status(400).json({ error: "No Client Found" });
      }
      let cart = await Cart.findById(client.cartClientId);
      if (!cart) {
        cart = await Cart.create({ cartClientId: id });
        client.cardClientId = cart._id;
        client.save();
        return res.status(200).json({ msg: "New Cart Has Created" });
      }
      return res.status(200).json({ msg: "Cart Client has founded" });
    } else {
      return res.status(400).json({ error: "Something wrong" });
    }
  } catch (err) {
    res.status(400).json({ error: "err" });
  }
};

module.exports = {
  addProductToCart,
};
