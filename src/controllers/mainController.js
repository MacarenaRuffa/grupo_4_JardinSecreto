const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: (req,res) => {
        const exterior = products.filter((product) => product.category === "Exterior");
        const interior = products.filter((product) => product.category === "Interior");
        const macetas = products.filter((product) => product.category === "Macetas");
        const insumos = products.filter((product) => product.category === "Insumos");
        const herramientas = products.filter((product) => product.category === "Herramientas");
        const semillas = products.filter((product) => product.category === "Semillas");
        const suculentas = products.filter((product) => product.category === "Suculentas");
        const inSale = products.filter((product) => product.sale === "in-sale");
        res.render('index', { exterior, interior, macetas, insumos, herramientas, semillas, suculentas, inSale});
    },
};

module.exports = mainController;