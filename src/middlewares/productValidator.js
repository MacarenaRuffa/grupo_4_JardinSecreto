const { body } = require('express-validator');

const productValidator = [
    // Validaciones para el nombre del producto
    body('name')
        .notEmpty().withMessage('El nombre del producto es obligatorio.')
        .isLength({ min: 5 }).withMessage('El nombre del producto debe tener al menos 5 caracteres.'),

    // Validaciones para la descripcion del producto
    body('description')
        .notEmpty().withMessage('La descripción del producto es obligatoria.')
        .isLength({ min: 20 }).withMessage('La descripcion del producto debe tener al menos 20 caracteres.'),

    // FINALIZAR 
    body('price')
         .notEmpty().withMessage('El precio es obligatorio')
         .isNumeric().withMessage('El precio debe ser un numero'),

    body('categories_id')
         .notEmpty().withMessage('La categoria es obligatoria'),
         //.isNumeric().withMessage('El precio debe ser un numero'),


    // Validaciones para la imagen del producto
    body('image') 
        .optional()
        .custom((value, { req }) => {
            if (!req.file) {
                throw new Error('Debe adjuntar una imagen valida.');
            }
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            const extension = value.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                throw new Error('El archivo adjuntado no es una imagen valida (JPG, JPEG, PNG, GIF).');
            }
            return true;
        }),
];

module.exports = { productValidator };