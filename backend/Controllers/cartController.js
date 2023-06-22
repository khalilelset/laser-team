const Cart = require("./../Models/Client/Cart");
const Product = require("./../Models/Crafts/Product");
const ProductsInCart = require("./../Models/Client/productsInCart");
const Client = require("./../Models/Client/Client");
const { extractIdFromToken } = require("./../JWT");
const jwt = require("jsonwebtoken");
const ProductInC = require("./../Models/Client/productsInCart");

// ADD PRODUCT TO CART
const addProductToCart = async (req, res) => {
  const clientE = req.params.email;
  const productId = req.params.id;
  try {
    const addedProduct = Product.findById(productId);
    if (!addedProduct) {
      return res.status(404).json({ error: "Product not found" });
    } else {
      const client = await Client.findOne({ email: clientE });
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
        const product = await Product.findById(productId);
        const newProductInCart = new ProductsInCart({
          cartId: cart._id,
          productId: productId,
          product: product,
        });
        await newProductInCart.save();
        cart.productsInCart.push(newProductInCart);
        await cart.save();
        return res.status(200).json(newProductInCart);
      }
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// GET PRODUCTS FROM CART
const getProductsFromCart = async (req, res) => {
  const clientE = req.params.email;

  const client = await Client.findOne({ email: clientE });
  const cart = await Cart.findById(client.cartClientId);
  if (!cart) {
    return res.status(404).json({ msg: "Cart Not Found" });
  }
  const productsInCart = cart.productsInCart;
  if (!productsInCart) {
    return res.status(404).json({ msg: "No Products Into this cart" });
  }
  const products = await ProductInC.find({
    _id: { $in: productsInCart },
    status: 0,
  });
  res.status(200).json(products);
};

// REMOVE PRODUCT FROM CART
const removeProductFromCart = async (req, res) => {
  const clientE = req.params.email;
  const productId = req.params.id;
  try {
    const removedProduct = Product.findById(productId);
    if (!removedProduct) {
      return res.status(404).json({ error: "Product not found" });
    } else {
      const client = await Client.findOne({ email: clientE });
      if (!client) {
        return res.status(400).json({ error: "No Client Found" });
      }
      const cart = await Cart.findById(client.cartClientId);
      if (!cart) {
        return res.status(200).json({ msg: "This client don't have a Cart" });
      }
      if (!Array.isArray(cart.productsInCart)) {
        cart.productsInCart = [];
      }
      // Remove product from cart
      cart.productsInCart = cart.productsInCart.filter(
        (id) => id !== productId
      );
      await cart.save();

      // Remove product from productsInCart
      // const productsInCart = await ProductsInCart.find({ productId });
      // for (const productInCart of productsInCart) {
      //   await productInCart.remove();
      // }
      await ProductsInCart.deleteOne({ productId });
      res.status(200).json({ msg: "Product removed from cart successfully" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  addProductToCart,
  getProductsFromCart,
  removeProductFromCart,
};
