const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.JSON');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
const { validationResult } = require('express-validator');
const db = require("../database/models");

const usersController = {

	register: (req, res) => {
		res.render('register');
	},

	login: (req, res) => {
		res.render('login');

	},

	store: async (req, res) => {
		try {
			const newUser = {
				...req.body,
				password: bcrypt.hashSync(req.body.password, 10),
				image: req.file?.filename || "default-image.png"
			};
			await db.User.create(newUser);
			res.redirect('/');

		} catch (error) {
			return res.status(500).send(error)
		}

	},

	processLogin: async (req, res) => { //Pendiente 
		try {
			const user = await db.User.findOne({
				where: {
                    email: req.body.email 
                },
				include: ['role']
			});
			if (!user) {
				return res.status(404).render('nologin');

			}
			if (!bcrypt.compareSync(req.body.password, user.password)) {
				return res.status(500).render('error');
			}
			req.session.user = {
				id: user.id,
				name: user.name,
				email: user.email,
				role: user.role.name,
			};
			res.redirect('/')

		} catch (error) {
			return res.status(500).send(error)
		}
	},
	
	//pasar a processLogin
	remember(req, res) {
		req.session.usuarioLogueado = usuariologuearse;

		if (req.body.recordame != undefined) {
			res.cookie('recordame', usuarioALoguearse.email, { maxAge: 60000 })
		};
	},


	errorcontroller(req, res) {
		res.render('error');
	},

	nologin(req, res) {
		res.render('nologin');
	},

// Función para actualizar un usuario
updateUser: async (req, res) => {
	try {
		const userId = req.params.id;
		const updatedUser = req.body; // Datos actualizados del usuario
		await db.User.update(updatedUser, { where: { id: userId } });
		res.send('Usuario actualizado correctamente');
	} catch (error) {
		res.status(500).send('Error al actualizar usuario');
	}
},
	// Función para eliminar un usuario
    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            await db.User.destroy({ where: { id: userId } });
            res.send('Usuario eliminado correctamente');
        } catch (error) {
            res.status(500).send('Error al eliminar usuario');
        }
    }
};

module.exports = usersController;