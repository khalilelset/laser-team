const Cart = require("./../Models/Client/Cart");
const Product = require("./../Models/Crafts/Product");
const ProductsInCart = require("./../Models/Client/productsInCart");
const Client = require("./../Models/Client/Client");
const { extractIdFromToken } = require("./../JWT");
const jwt = require("jsonwebtoken");

// ADD PRODUCT TO CART
const addProductToCart = async (req, res) => {
  const productId = req.params.id;
  try {
    const addedProduct = Product.findById(productId);
    if (!addedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
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
        return res.status(200).json({ msg: "This client don't have a Cart" });
      }
      const existingProduct = await ProductsInCart.findOne({
        cartId: cart._id,
        productId: productId,
      });
      if (existingProduct) {
        existingProduct.numOfProduct++;
        await existingProduct.save();
      } else {
        const newProductInCart = new ProductsInCart({
          cartId: cart._id,
          productId: productId,
        });
        await newProductInCart.save();
        cart.productsInCart.push(newProductInCart);
        await cart.save();
      }
      return res.status(200).json({ msg: "Product Added To Cart" });
    } else {
      return res.status(400).json({ error: "Something wrong" });
    }
  } catch (err) {
    res.status(400).json({ error: "err" });
  }
};

// GET PRODUCTS FROM CART
const getProductsFromCart = async (req, res) => {
  // const cartId = req.params.id;
  try {
    const token = req.cookies && req.cookies["access-token"];
    if (!token) {
      return res.status(400).json({ error: "User Not Authenticated!" });
    }
    const userInfo = extractIdFromToken(token);
    const { id } = userInfo;
    const client = await Client.findById(id);
    console.log(client.cartClientId);
    const cart = await Cart.findById(client.cartClientId);
    if (!cart) {
      return res.status(404).json({ msg: "Cart Not Found" });
    }
    const productsInCart = cart.productsInCart;
    if (!productsInCart) {
      return res.status(404).json({ msg: "No Products Into this cart" });
    }
    res.status(200).json({ data: productsInCart });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  addProductToCart,
  getProductsFromCart,
};
