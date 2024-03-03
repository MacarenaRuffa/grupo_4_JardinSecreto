const { body } = require('express-validator');

const registerValidator = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),

    body('email').notEmpty().withMessage('El correo electrónico es obligatorio')
    .isEmail().withMessage('El correo electrónico no tiene un formato válido'),

    body('password').notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),

    body('pass_confirm').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),

    body('gender').notEmpty().withMessage('El género es obligatorio')
    .isIn(['masculino', 'femenino', 'no_binario', 'otro']).withMessage('El género debe ser masculino, femenino, no binario u otro')
];

module.exports = { registerValidator };