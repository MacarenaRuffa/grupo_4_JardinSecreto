const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/', productsAPIController.list);
router.get('/:id', productsAPIController.productDetail);
router.get('/count-categories', productsAPIController.countCategories);
router.get('/last-product', productsAPIController.lastProduct);

module.exports = router;
