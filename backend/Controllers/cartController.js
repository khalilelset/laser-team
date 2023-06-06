const Cart = require("./../Models/Client/Cart");

const addProduct = (req, res) => {
  res.status(200).json({ msg: "hello from addProduct to cart" });
};

module.exports = {
  addProduct,
};
