const { body } = require('express-validator');

const loginValidator = [

    body('email').notEmpty().withMessage('El correo electronico es obligatorio')
    .isEmail().withMessage('El correo electronico no tiene un formato valido'),
    
    body('password').notEmpty().withMessage('La contraseña es obligatoria')
    
];



module.exports = { loginValidator };