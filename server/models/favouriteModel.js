const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user_id: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });
  
  module.exports = mongoose.model('Favorites', favoriteSchema);
  