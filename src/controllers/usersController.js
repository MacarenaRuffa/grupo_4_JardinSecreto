const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.JSON');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
const { validationResult } = require('express-validator');


const usersController = {



	register: (req, res) => {
		res.render('register');
	},

	login: (req, res) => {
		res.render('login');

	},


	store: (req, res) => {
		const newUser = {
			id: user[user.length - 1].id + 1,
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file?.filename || "default-image.png"
		};
		user.push(newUser);
		fs.writeFileSync(userFilePath, JSON.stringify(user, null, 2));
		res.redirect('/');
	},

	processLogin: (req, res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()) {
			let usersJSON = fs.readFileSync(userFilePath, { encoding: 'UTF-8' });
			let users;
			if (usersJSON === '') {
				users = [];
			} else {
				users = JSON.parse(usersJSON);
			}
			let usuarioALoguearse;
			for (let i = 0; i < users.length; i++) {
				if (users[i].email === req.body.email) {
					if (bcrypt.compareSync(req.body.password, users[i].password)) {
						usuarioALoguearse = users[i];
						break;
					}
				}
			}
			if (usuarioALoguearse === undefined) {
				return res.redirect('/login', { errors: [{ msg: 'Credenciales inválidas' }] });
			}
			req.session.usuarioALogueado = usuarioALoguearse;
			return res.redirect('/index');
		} else {
			return res.render('login', { errors: errors.mapped() });
		}
	},
	
	remember(req,res) {
		req.session.usuarioLogueado=usuariologuearse;
		
		if (req.body.recordame!= undefined){
		res.cookie('recordame', usuarioALoguearse.email,{max : 6000})
		} ;
	}	
	




};


module.exports = usersController;