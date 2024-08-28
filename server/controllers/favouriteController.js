const Favorite = require('../models/favouriteModel');
const Product = require('../models/productModel');

exports.createFavorite = async (req, res) => {
  const { user_id } = req.user;
  const { id } = req.body;

  try {
    const product = await Product.findOne({ id: id });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const favoriteExists = await Favorite.findOne({ user_id, id });

    if (favoriteExists) {
      return res.status(400).json({ message: 'Product already in favorites' });
    }

    const favorite = new Favorite({
      user_id,
      id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });

    await favorite.save();

    res.status(201).json({ message: 'Product added to favorites', favorite });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add favorite', err });
  }
};

exports.getFavorites = async (req, res) => {
  const { user_id } = req.user;
  try {
    const favorites = await Favorite.find({ user_id });

    if (!favorites.length) {
      return res.status(404).json({ message: 'No favorites found' });
    }

    res.status(200).json({ message: 'Favorites retrieved successfully', favorites });
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve favorites', err });
  }
};

exports.deleteFavorite = async (req, res) => {
  const { user_id } = req.user;
  const { id } = req.body;

  try {
    const favorite = await Favorite.findOneAndDelete({ user_id, id });

    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    res.status(200).json({ message: 'Favorite removed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove favorite', err });
  }
};