//const fs = require('fs');
//const path = require('path');
//const userFilePath = path.join(__dirname, '../data/user.JSON');
//const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
const { validationResult } = require('express-validator');
const db = require("../database/models");

const usersController = {
	register: (req, res) => {
		res.render('register');
	},
	login: (req, res) => {
		res.render('login', );

	},
	errorcontroller(req, res) {
		res.render('error');
	},
	nologin(req, res) {
		res.render('nologin');
	},

	store: async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.render('register', { errors: errors.mapped(), oldData: req.body });
			}
	
			const newUser = {
				...req.body,
				password: bcrypt.hashSync(req.body.password, 10),
				image: req.file?.filename || "default-image.png",
				roles_id: 2
			};
			await db.User.create(newUser);
			return res.redirect('/'); 
	
		} catch (error) {
			console.error("Error al registrarse:", error);
			return res.status(500).send("Error al registrarse");
		}
	},

	processLogin: async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.render("login", { errors: errors.mapped(), oldData: req.body });
        }

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
				return res.render("error", {  oldData: req.body.email });
			}
			req.session.user = {
				id: user.id,
				name: user.name,
				email: user.email,
				role: user.role.name,
			};
			res.redirect('/')
			
		} catch (error) {
			console.log(error)
			return res.status(500).send("Error interno del servidor, comuniquese con un administrador")
		}
	},


	//pasar a processLogin
	remember(req, res) {
		req.session.usuarioLogueado = usuariologuearse;
		console.log(userEmail);
		if (req.body.recordame != undefined) {
			res.cookie('recordame', usuarioLoguearse.email, { maxAge: 60000 })
		};
	},

	userEdit: async (req, res) => {
		try {
			const user = await db.User.findByPk(req.params.id);
			res.render('userEdit', { userToEdit: user });
		} catch (error) {
			res.status(500).send("Error al editar usuario");
		}

	},
	// Función para actualizar un usuario
	update: async (req, res) => {
		try {
			await db.User.update({
				name: req.body.nameEdit,
				email: req.body.emailEdit
			}, { where: { id: req.params.id } });
			console.log('Usuario actualizado correctamente');
			res.redirect('/')
		} catch (error) {
			res.status(500).send('Error al actualizar usuario');
		}
	},
	// Función para eliminar un usuario
	delete: async (req, res) => {
		try {
			await db.User.destroy({ where: { id: req.params.id } });
			console.log('Usuario eliminado correctamente');
			res.redirect('/')
		} catch (error) {
			res.status(500).send('Error al eliminar usuario');
		}
	}
};

module.exports = usersController;