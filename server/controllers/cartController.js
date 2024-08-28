const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

exports.createCart = async (req, res) => {
  const { user_id } = req.user;
  const { product_id, quantity } = req.body;
  let cart = await Cart.findOne({ user_id });
  if (!cart) {
    cart = new Cart({
      user_id,
      products: [
        {
          product_id,
          quantity: Math.max(quantity, 0),
        },
      ],
    });
  } else {
    const productIndex = cart.products.findIndex(
      (prod) => prod.product_id === product_id
    );
    if (productIndex > -1) {
      if (quantity === 0) {
        cart.products.splice(productIndex, 1);
      } else {
        cart.products[productIndex].quantity = quantity;
      }
    } else {
      cart.products.push({ product_id, quantity });
    }
  }
  await cart.save();
  res.status(200).json({ message: "Product added/updated in cart", cartItems: cart.products });
};


exports.getCartItems = async (req, res) => {
  const { user_id } = req.user;
  let cart = await Cart.findOne({ user_id });
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  try {
    let subTotal = 0;
    const cartItems = await Promise.all(
      cart.products.map(async (item) => {
        const product = await Product.findOne({ id: item.product_id });
        subTotal += product.price * item.quantity;
        return {
          product_id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          quantity: item.quantity,
          image: product.images[0],
        };
      })
    );
    res
      .status(200)
      .json({
        message: "Cart items fetched successfully",
        cartItems,
        subTotal,
      });
  } catch (err) {
    res.status(500).json({ message: "cart not found", err });
  }
};


exports.deleteCart = async (req, res) => {
  const { user_id } = req.user;
  const product_id = req.params.id;

  try {
    const cart = await Cart.findOne({ user_id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productExists = cart.products.find((item) => item.product_id === product_id);
    if (!productExists) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    if(cart.products.length <=1){
      await Cart.deleteOne({user_id});
      return res.status(200).json({message:"cart deleted successfully"})
    }

    cart.products = cart.products.filter((item) => item.product_id != product_id);
    cart.save();
    res.status(200).json({ message: "Product removed from cart" });
  } 
  catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
