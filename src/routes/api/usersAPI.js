const express = require('express');
const router = express.Router();
const usersAPIController = require ('../../controllers/api/usersAPIController');

router.get('/', usersAPIController.userlist);
router.get('/:id', usersAPIController.userDetail);

module.exports = router