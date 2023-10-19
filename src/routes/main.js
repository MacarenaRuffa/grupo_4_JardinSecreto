//rutas con home, contact, about us
const express = require('express');

const router = express.Router;

const mainController = require('../controllers/mainController.js');

router.get('/home', mainController.home);
router.get('/contact', mainController.contact);
router.get('/aboutus', mainController.aboutUs);

module.exports = router;
