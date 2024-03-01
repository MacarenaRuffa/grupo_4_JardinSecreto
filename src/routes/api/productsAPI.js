const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/last-product', productsAPIController.lastProduct); // Cambiado el orden aquí
router.get('/', productsAPIController.list);
router.get('/:id', productsAPIController.productDetail);
router.get('/count-categories', productsAPIController.countCategories);

module.exports = router;
