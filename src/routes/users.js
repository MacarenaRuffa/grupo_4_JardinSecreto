//rutas con register, login, profile, search
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const methodOverride = require('method-override');
const { loginValidator } = require('../middlewares/userValidator')
const usersController = require('../controllers/usersController');
const { registerValidator} = require('../middlewares/userRegister')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-user${ext}}`;
        cb(null, filename);
    },
});

const upload = multer({ storage });


router.get('/register', usersController.register);
router.post('/register', upload.single('avatar'),registerValidator, usersController.store);

router.get('/login', usersController.login);

router.post('/login', loginValidator, usersController.processLogin);

router.get('/error',usersController.errorcontroller);

router.get('/nologin',usersController.nologin);

// Ruta para actualizar usuario
router.put('/:id/edit', usersController.update);
router.get('/:id/edit', usersController.userEdit);


// Ruta para eliminar usuario
router.delete('/:id', usersController.delete);

module.exports = router;
