const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const methodOverride = require('method-override');

const mainController = {
    home: (req, res) => {
        const user=req.session.user
        const inSale = products.filter((product) => product.sale === "in-sale");
        res.render('index', { inSale, user });

        //const filteredProducts = categories.reduce((acc, category) => {
        //     acc[category.toLowerCase()] = products.filter((product) => product.category === category);
        //    return acc;
        //}, {});
        //res.render('index', { ...filteredProducts, inSale });
    },

};

module.exports = mainController;