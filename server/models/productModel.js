const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sub_title: {
    type: String,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: {
    type: [Number],
  },
  colors: {
    type: [String],
  },
  images: {
    type: [String],
  },
  category: {
    type: String,
  },
  material: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  favourite: {
    type: Boolean,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
