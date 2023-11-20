//rutas con register, login, profile, search
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-user${ext}}`;
        cb(null, filename);
    }
});


const upload = multer ({storage});

const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.post('/register', upload.single('avatar'), usersController.store);

router.get('/login', usersController.login);




module.exports = router;
