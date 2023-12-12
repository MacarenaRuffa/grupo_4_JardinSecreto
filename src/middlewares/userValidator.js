const { body } = require('express-validator');

const loginValidator = [
    body('user1').notEmpty(),
    body('password').notEmpty()
];

module.exports = { loginValidator };
