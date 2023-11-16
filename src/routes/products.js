//rutas con create,edit,detail,list
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/detail/:id', productsController.productDetail);
router.get('/cart', productsController.productCart);

router.get('/:id/edit', productsController.productEdit);
router.put('/:id/edit', productsController.update);

router.get('/create', productsController.productCreate);
router.get('/',  productsController.productsList );





module.exports = router;
