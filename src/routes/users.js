//rutas con register, login, profile, search
const express = require('express');

const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);
router.get('/search', usersController.search);

module.exports = router;
