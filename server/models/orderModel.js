const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: String,
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone_no: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  products: [
    {
      product_id: String,
      quantity: Number,
    },
  ],
  order_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  estimated_date: {
    type: Date,
    required: true,
    default: function () {
      return new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
