//aca irian los metodos que recibiran datos de productos y devolveran la info correspondiente
// create, edit, detail, list
//productCart y productDetail
const db = require("../database/models")
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
	productDetail: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id);
			res.render('productDetail', { product });
		} catch (error) {
			res.status(500).send("Error en detalle del producto");
		}
	},

	productCreate: (req, res) => {
		res.render('productCreate');
	},

	store: async (req, res) => {
		try {
			const newProduct = {
				...req.body,
				image: req.file?.filename || "default-image.png"
			};
			await db.Product.create(newProduct);
			res.redirect('/products');
		} catch (error) {
			return res.status(500).send("Error al crear el producto")
		}
	},

	productCart: (req, res) => {
		const user = req.session.user
		if (user === undefined) {
			return res.render("login")
		}
		res.render('productCart', { user });

	},
	 //replicar el de user
	productEdit: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id);
			res.render('productEdit', { productToEdit: product });
		} catch (error) {
			res.status(500).send("Error al editar el producto");
		}
		
	},

	update: async (req, res) => {
		try {
			await db.Product.update({ 
				name: req.body.productNameEdit,
				description: req.body.descriptionEdit,
				price: req.body.priceEdit,
				//image: 
				in_sale: req.body.in_saleEdit
			 }, 
			 { where: { id: req.params.id } });
			 console.log('Producto actualizado correctamente');
			 res.redirect('/products')
		} catch (error) {
			return res.status(500).send("Error al actualizar el producto")
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
				where: {id:req.params.id},
			});
			res.redirect("/products");
		} catch (error) {
			console.log(error);
			res.status(500).send("Error al eliminar el producto")
		}
	},

	productsList: async (req, res) => {
		try {
			const products = await db.Product.findAll({ include: ['category'] });
			res.render('productList', { products });
		} catch (error) {
			res.status(500).send("Error interno del servidor, comuniquese con un administrador");
		}
	},
};

module.exports = productsController;