const db = require('../../database/models');


const controller = {
    async list(req, res) {
        try {
            const products = await db.Product.findAll();
            const response = {
                status: 200,
                count: products.length,
                products
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

module.exports = controller;