const db = require('../../database/models');

const controller = {
    async list(req, res) {
        try {
            const products = await db.Product.findAll();
            const response = {
                status: 200,
                count: products.length,
                url: '/api/products',
                data: products
            };
            res.send(response);
        } catch (error) {
            console.error("Error en el controlador (list):", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    async productDetail(req, res) {
        try {
            const product = await db.Product.findByPk(req.params.id, {
                include: ['category']
            });

            if (!product) {
                return res.status(404).send("Producto no encontrado");
            }

            const response = {
                status: 200,
                count: 1,
                url: `/api/products/${req.params.id}`,
                data: product
            };
            res.send(response);
        } catch (error) {
            console.error("Error en el controlador (productDetail):", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    async lastProduct(req, res) {
        try {
            console.log('Request to lastProduct received'); // Log de depuración
            const lastProduct = await db.Product.findOne({
                order: [['createdAt', 'DESC']],
                include: ['category'],
            });
    
            if (!lastProduct) {
                return res.status(404).send("No se encontró el último producto");
            }
    
            const response = {
                status: 200,
                count: 1,
                url: '/api/products/last-product',
                data: lastProduct,
            };
            res.send(response);
        } catch (error) {
            console.error("Error en el controlador:", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    async countCategories(req, res) {
        try {
            const categoryCount = await db.Category.count();
            const response = {
                status: 200,
                count: categoryCount,
                url: '/api/products/count-categories'
            };
            res.json(response);
        } catch (error) {
            console.error("Error en el controlador (countCategories):", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },
};

module.exports = controller;
