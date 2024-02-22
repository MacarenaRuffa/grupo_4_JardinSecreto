//const fs = require('fs');
//const path = require('path');
//const productsFilePath = path.join(__dirname, '../data/products.JSON');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const methodOverride = require('method-override');
const { Product, Category } = require('../database/models')

const mainController = {
    home: async (req, res) => {
        try {
            const user = req.session.user;
            const inSale = await Product.findAll({
                where: { in_sale: true },
                include: [{ model: Category, as: 'category' }]
            });
            res.render('index', { inSale, user });
        } catch (error) {
            console.error("Error al recuperar productos en venta:", error);
            res.status(500).render('error', { message: 'Error interno del servidor' });
        }
    },
    
};

module.exports = mainController;