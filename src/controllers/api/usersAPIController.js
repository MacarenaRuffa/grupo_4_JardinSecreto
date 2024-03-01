const db = require('../../database/models');


const controller = {
    async userlist(req, res) {
        try {
            const users = await db.User.findAll({
                attributes: {
                    exclude: ['password'
                    ]
                }
            });

            const response = {
                status: 200,
                count: users.length,
                url: '/api/users',
                data:
                {
                    users,
                    detail: `http://localhost:3000/api/user/${users.id}`
                }
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async userDetail(req, res) {
        try {
            const users = await db.User.findByPk(req.params.id, {});
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