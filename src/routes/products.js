//rutas con create,edit,detail,list
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-product${ext}}`;
        cb(null, filename);
    }
});

const upload = multer ({storage});

const productsController = require('../controllers/productsController');

router.get('/',  productsController.productsList );

router.get('/create', productsController.productCreate);
router.post('/create', upload.single('image'), productsController.store);

router.get('/detail/:id', productsController.productDetail);

router.get('/cart', productsController.productCart);

router.get('/:id/edit', productsController.productEdit);
router.put('/:id/edit', productsController.update);

router.delete('/:id/delete', productsController.delete);

module.exports = router;
