//aca irian los metodos que recibiran datos de productos y devolveran la info correspondiente
// create, edit, detail, list
//productCart y productDetail
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    productDetail: (req,res) => {
        const product = products.find((product) => product.id == req.params.id);
		const user=req.session.user
			
        res.render('productDetail',{product, user});
		
			
		
    },

    productCreate: (req,res) => {
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

    productCart: (req,res) => {
			const user=req.session.user
			if (user===undefined) {
				return res.render("login")
			}
			res.render('productCart', {user});
		
    },

    productEdit: (req, res) => {
		const product = products.find((product) => product.id == req.params.id);
		res.render('productEdit', { productToEdit: product });
	},

	update: (req, res) => {
		const indexProduct = products.findIndex((product) => product.id == req.params.id);
		products[indexProduct] = {
			...products[indexProduct],
			...req.body
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	destroy: (req, res) => {
		const indexProduct = products.findIndex((product) => product.id == req.params.id);
		products.splice(indexProduct, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},
    
    productsList: (req,res) =>{
		const user=req.session.user
		if (user===undefined) {
			return res.render("login")
		}
		res.render('productList', {products, user});
    }
	


};

module.exports = productsController;