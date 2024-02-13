const { body } = require('express-validator');

const loginValidator = [

    body('email').notEmpty().withMessage('El correo electrónico no es valido'),

    body('email').isEmail().withMessage('Debe ser un correo electrónico valido'),

    body('password').notEmpty().withMessage('La contraseña es incorrecta'),

    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 6 caracteres'),

];

module.exports = { loginValidator };
