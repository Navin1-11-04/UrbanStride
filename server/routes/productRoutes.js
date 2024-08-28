const productController = require('../controllers/productController')
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

router.get("/",productController.getProducts)
router.post("/",auth,productController.createProduct)
router.delete("/",auth,productController.deleteProduct)
router.put("/",auth,productController.updateProduct)

module.exports = router;

