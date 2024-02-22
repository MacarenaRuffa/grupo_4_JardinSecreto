const db = require('../../database/models');

const controller = {
    async list(req, res) {
        try {
            const products = await db.Product.findAll({
                include: ['category']
            });
            const response = {
                status: 200,
                count: products.length,
                url: 'api/products',
                data: products
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async productDetail(req, res) {
        try {
            const products = await db.Product.findByPk(req.params.id, {
                include: ['category']
            });
            const response = {
                status: 200,
                count: products.length,
                url: 'api/products/:id',
                data: products
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },

}

module.exports = controller;