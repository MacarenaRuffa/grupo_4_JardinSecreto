//aca irian los metodos que recibiran datos de productos y devolveran la info correspondiente
// create, edit, detail, list
//productCart y productDetail
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    productCart: (req,res) => {
        res.render('productCart');
    },
    productEdit: (req,res) => {
        res.render('productEdit');
    },
    productCreate: (req,res) => {
        res.render('productCreate');
    },
    productsList: (req,res) =>{
        res.render('productList', {products});
    }

};

module.exports = productsController;