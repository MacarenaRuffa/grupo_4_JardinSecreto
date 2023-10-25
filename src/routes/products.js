//rutas con create,edit,detail,list
const express = require('express');

const router = express.Router();

const productController = require('../controllers/productsController');

router.get('/detail', productController.productDetail);
router.get('/cart', productController.productCart);

module.exports = router;
