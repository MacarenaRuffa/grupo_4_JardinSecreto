//rutas con create,edit,detail,list
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/detail/:id', productsController.productDetail);
router.get('/cart', productsController.productCart);
router.get('/edit', productsController.productEdit);
router.get('/create', productsController.productCreate);


module.exports = router;
