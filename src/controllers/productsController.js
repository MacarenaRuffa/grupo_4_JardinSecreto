const { validationResult } = require('express-validator')

const db = require("../database/models")
//const fs = require('fs');
//const path = require('path');
//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
	productDetail: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id);
			res.render('productDetail', { product });
		} catch (error) {
			res.status(500).send("error");
		}
	},

	productCreate:async (req, res) => {
		try {
			
			const categories = await db.Category.findAll();
			res.render('productCreate', {categories});
			
		} catch (error) {
			return res.status(500).send("error");
		}
	},

	store: async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.render('productCreate', { oldData: req.body, errors: errors.mapped(),categories });
			}
			const newProduct = {
				...req.body,
				image: req.file?.filename || "default-image.png"
			};
			await db.Product.create(newProduct);
			res.redirect('/products');
		} catch (error) {
			return res.status(500).send("error");
		}
	},

	productCart: (req, res) => {
		const user = req.session.user
		if (user === undefined) {
			return res.render("login");
		}
		res.render('productCart', { user });

	},
	//replicar el de user
	productEdit: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id);
			const categories = await db.Category.findAll();
			res.render('productEdit', { productToEdit: product, categories });
		} catch (error) {
			res.status(500).send("error");
		}

	},

	update: async (req, res) => {
		try {
			const categories = await db.Category.findAll();
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.render('productEdit', { productToEdit: req.body, errors: errors.mapped(),categories });
			}
			await db.Product.update({
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				categories_id: req.body.categories_id,
				in_sale: req.body.in_sale
			},
				{ where: { id: req.params.id } });
			console.log('Producto actualizado correctamente');
			res.redirect('/products')
		} catch (error) {
			return res.status(500).send("error")
		}

		//CODIGO VIEJO DE ACTUALIZAR
		// const indexProduct = products.findIndex((product) => product.id == req.params.id);
		// products[indexProduct] = {
		// 	...products[indexProduct],
		// 	...req.body
		// };
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		// res.redirect('/products');
	},

	/*destroy: (req, res) => {
		const indexProduct = products.findIndex((product) => product.id == req.params.id);
		products.splice(indexProduct, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},*/

	delete: async (req, res) => {
		try {
			await db.Product.destroy({
				where: { id: req.params.id },
			});
			res.redirect("/products");
		} catch (error) {
			console.log(error);
			res.status(500).send("error")
		}
	},

	productsList: async (req, res) => {
		try {
			const products = await db.Product.findAll({ include: ['category'] });
			res.render('productList', { products });
		} catch (error) {
			res.status(500).send("error");
		}
	},
};

module.exports = productsController;