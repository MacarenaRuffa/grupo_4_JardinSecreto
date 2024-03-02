const db = require('../../database/models');

const controller = {
    async userlist(req, res) {
        try {
            const users = await db.User.findAll({attributes:{exclude:['password']}}); // Obtén la lista de usuarios
            const response = {
                status: 200,
                count: users.length,
                url: '/api/users',
                users: users // Agrega la propiedad 'users' con la lista de usuarios
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async userDetail(req, res) {
        try {
            const user = await db.User.findByPk(req.params.id, {
                include: ['category']
            });
            const response = {
                status: 200,
                count: user ? 1 : 0, // Si se encuentra el usuario, cuenta como 1, de lo contrario, 0
                url: 'api/users/:id',
                data: user ? [user] : [] // Envia un array con el usuario si se encuentra, de lo contrario, un array vacío
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

module.exports = controller;
