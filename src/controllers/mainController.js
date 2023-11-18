const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: (req, res) => {
        const inSale = products.filter((product) => product.sale === "in-sale");
        res.render('index', { inSale });

        const filteredProducts = categories.reduce((acc, category) => {
            acc[category.toLowerCase()] = products.filter((product) => product.category === category);
            return acc;
        }, {});
        res.render('index', { ...filteredProducts, inSale });
    }

};

module.exports = mainController;