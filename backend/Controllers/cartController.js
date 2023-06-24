const Cart = require("./../Models/Client/Cart");
const Product = require("./../Models/Crafts/Product");
const ProductsInCart = require("./../Models/Client/productsInCart");
const Client = require("./../Models/Client/Client");
const { extractIdFromToken } = require("./../JWT");
const jwt = require("jsonwebtoken");
const ProductInC = require("./../Models/Client/productsInCart");
const Transaction = require("../Models/Transaction/Transaction");

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

// ADD TO TRANSACTION
const addToTransaction = async (req, res) => {
  const clientE = req.params.email;
  try {
    const client = await Client.findOne({ email: clientE });
    if (!client) {
      return res.status(400).json({ error: "No Client Found" });
    }
    const cart = await Cart.findById(client.cartClientId);
    if (!cart) {
      return res.status(200).json({ msg: "This client don't have a Cart" });
    }
    const productsInCart = cart.productsInCart;
    if (!productsInCart) {
      return res.status(404).json({ msg: "No Products Into this cart" });
    }
    let productsBuyed = []; // Declare productsBuyed outside the try block
    try {
      productsBuyed = await ProductsInCart.find({
        _id: { $in: productsInCart },
        status: 0,
      });
      await ProductsInCart.updateMany(
        {
          _id: { $in: productsBuyed.map((product) => product._id) },
        },
        { $set: { status: 1 } }
      );
      console.log("Products updated successfully.");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    const ProductsStatusOne = await ProductsInCart.find({
      _id: { $in: productsInCart },
      status: 1,
    });

    const transaction = new Transaction({
      cartId: cart._id,
      clientId: client._id,
      productsInTransaction: ProductsStatusOne,
      Location: "Tripoli",
      totalPrice: req.body.totalPrice,
      // ownerPhoneNumber: client.ownerPhNumber,
    });

    // await productsBuyed.save();
    await transaction.save();
    res.status(200).json(transaction);
    try {
      await ProductsInCart.deleteMany({
        _id: { $in: productsBuyed.map((product) => product._id) },
      });
      console.log("Products deleted successfully.");
    } catch (error) {
      console.log("Failed to delete products.");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET TRANSACTION DETAILS
const getTransactionDetails = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    if (!transactions) {
      return res.status(404).json({ msg: "Not Transactions Found" });
    }
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  addProductToCart,
  getProductsFromCart,
  removeProductFromCart,
  addToTransaction,
  getTransactionDetails,
};
