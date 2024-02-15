const { body } = require('express-validator');

const registerValidator = [
    body('name').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty(),
    body('genre').notEmpty()
];

module.exports = { registerValidator };