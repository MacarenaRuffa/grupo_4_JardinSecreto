//aca irian los metodos que recibiran datos de productos y devolveran la info correspondiente
// create, edit, detail, list
//productCart y productDetail
const db = require("../database/models")
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

    store: async (req, res) => {
		try {
			
			const newProduct = {
				...req.body,
				image: req.file?.filename || "default-image.png"
			};
			await db.Product.create(newProduct);
			res.redirect('/products');
				
		} catch (error) {
			
			return res.status(500).send(error)
			
		}},
		

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

	update: async (id) => {
		try{
			const product = await db.Product.updateOne({_id:id}, //recibe el id y lo actualiza, busca lo que tiene que setear 
		{
			$set:{ // lo que hacemos cuando seteamos y aca abajo agregamos los valores que vamos a modificar
				nombre: '',
				pais: '',
			}  		 
				
		});

		}catch (error) {
			
			return res.status(500).send(error)
			
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