const cartController = require('../controllers/cartController')
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');


router.post("/",auth,cartController.createCart);
router.get("/",auth,cartController.getCartItems);
router.delete("/:id",auth,cartController.deleteCart);

module.exports = router;