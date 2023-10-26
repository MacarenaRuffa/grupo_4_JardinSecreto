//rutas con register, login, profile, search
const express = require('express');

const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
//router.get('/product-edit', usersController.product_edit);

module.exports = router;
