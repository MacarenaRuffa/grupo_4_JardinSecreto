const { body } = require('express-validator');

const loginValidator = [
    body('email').notEmpty(),
    body('password').notEmpty()
];



module.exports = { loginValidator };
