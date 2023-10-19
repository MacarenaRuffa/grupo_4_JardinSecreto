//rutas con create,edit,detail,list
const express = require('express');

const router = express.Router;

const productController = require('../controllers/productsController');

router.get('/index', productController.index);
router.get('/show', productController.show);
router.get('/create', productController.create);
router.get('/edit', productController.edit);

module.exports = router;
