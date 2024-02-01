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
			user = await db.User.findOne({
				where: {
                    user: { [Op.gte]: user.body.user }
                },
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
				user_name: user.user_name,
				email: user.email,
				password: user.password,
				roles_id: user.roles_id.name,
			};
			res.redirect('/')

		} catch (error) {
			return res.status(500).send(error)
		}
	},
	

	
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
	}





};




module.exports = usersController;