const express = require('express');
const favouriteController = require('../controllers/favouriteController.js');
const router = express.Router();
const auth = require('../middlewares/auth.js');

router.post('/',auth,favouriteController.createFavorite);
router.get('/',auth,favouriteController.getFavorites);
router.delete('/',auth,favouriteController.deleteFavorite);

module.exports = router;
