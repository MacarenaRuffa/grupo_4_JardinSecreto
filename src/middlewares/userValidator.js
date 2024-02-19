const { body } = require('express-validator');

const loginValidator = [
    body('email').notEmpty().withMessage('El correo electronico es obligatorio').isEmail().withMessage('El correo electronico no tiene un formato valido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
];



module.exports = { loginValidator };
