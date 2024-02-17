const { body } = require('express-validator');

const registerValidator = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').notEmpty().withMessage('El correo electronico es obligatorio').isEmail().withMessage('El correo electronico no tiene un formato valido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('genre').notEmpty().withMessage('El genero es obligatorio').isIn(['masculino', 'femenino', 'otro']).withMessage('El genero debe ser masculino, femenino u otro')
];

module.exports = { registerValidator };