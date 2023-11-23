const { body } = require('express-validator');

const loginValidator = [
    body('email').isEmail(),
    body('password').isLength({ min: 10 }).withMessage('La contraseña al menos debe tener 10 caracteres')
];

module.exports = { loginValidator };
