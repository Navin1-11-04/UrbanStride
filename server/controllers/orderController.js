const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

exports.createOrder = async (req, res) => {
  const { user_id, email } = req.user;
  const { phone_no, address, name } = req.body;
  try {
    const cart = await Cart.findOne({ user_id });
    if (!cart) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    const order = new Order({
      user_id,
      name,
      email,
      phone_no,
      address,
      products: cart.products,
    });
    order.save();
    await cart.deleteOne({ user_id });
    res.status(200).json({ message: "Order placed Successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

exports.getOrders = async (req, res) => {
  const { user_id, email } = req.user;
  try {
    const orders = await Order.find({ user_id: user_id });
    if (!orders || orders.length === 0) {
      return res.status(400).json({ message: "No Orders Found" });
    }
    const orderItems = await Promise.all(
      orders.map(async (order) => {
        const products = await Promise.all(
          order.products.map(async (item) => {
            const product = await Product.findOne({ id: item.product_id });
            return {
              product_id: product.id,
              name: product.name,
              price: product.price,
              quantity: item.quantity,
              image: product.images,
            };
          })
        );
        return {
          user_id,
          name: order.name,
          phone: order.phone_no,
          address: order.address,
          email,
          products,
        };
      })
    );
    res.status(200).json({
      message: "Orders fetched successfully",
      orderItems,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};
