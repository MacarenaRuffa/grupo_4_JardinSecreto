const db = require('../../database/models');


const controller = {
    async userlist(req, res) {
        try {
            const users = await db.User.findAll({
                
            });
            const response = {
                status: 200,
                count: users.length,
                url: '/api/users',
                data: users
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async userDetail(req, res) {
        try {
            const users = await db.User.findByPk(req.params.id, {
                include: ['category']
            });
            const response = {
                status: 200,
                count: users.length,
                url: 'api/users/:id',
                data: users
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },

}

module.exports = controller;