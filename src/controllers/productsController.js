const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    productDetail: (req, res) => {
        const productId = req.params.id;
        const product = products.find((product) => product.id == productId);
        const user = req.session.user;

        if (!product) {
            return res.status(404).render('error', { message: 'Producto no encontrado' });
        }

        res.render('productDetail', { product, user });
    },

    productCreate: (req, res) => {
        res.render('productCreate');
    },

    store: (req, res) => {
        const newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image: req.file?.filename || "default-image.png"
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    },

    productCart: (req, res) => {
        const user = req.session.user;

        if (user === undefined) {
            return res.render("login");
        }

        res.render('productCart', { user });
    },

    productEdit: (req, res) => {
        const productId = req.params.id;
        const product = products.find((product) => product.id == productId);

        if (!product) {
            return res.status(404).render('error', { message: 'Producto no encontrado' });
        }

        res.render('productEdit', { productToEdit: product });
    },

    update: (req, res) => {
        const productId = req.params.id;
        const indexProduct = products.findIndex((product) => product.id == productId);

        if (indexProduct === -1) {
            return res.status(404).render('error', { message: 'Producto no encontrado' });
        }

        products[indexProduct] = {
            ...products[indexProduct],
            ...req.body
        };
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    },

    destroy: (req, res) => {
        const productId = req.params.id;
        const indexProduct = products.findIndex((product) => product.id == productId);

        if (indexProduct !== -1) {
            products.splice(indexProduct, 1);
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        }

        res.redirect('/products');
    },

    productsList: (req, res) => {
        const user = req.session.user;

        if (user === undefined) {
            return res.render("login");
        }

        res.render('productList', { products, user });
    }
};

module.exports = productsController;