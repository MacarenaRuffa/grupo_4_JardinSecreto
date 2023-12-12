const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.JSON');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
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
	const {user1, password} = req.body;
	let userFound = users.find((user) => user.username === user1);

	if(!userFound ){
		return res.status(404).send({message:"usuario no encontrado"})

	}
	if(!bcrypt.compareSync(password,userFound.password)){
		return res.status(500).send({message: "esta mal la contraseña"})
	}
	return res.redirect('/')
	
	},

	
	remember(req,res) {
		req.session.usuarioLogueado=usuariologuearse;
		
		if (req.body.recordame!= undefined){
		res.cookie('recordame', usuarioALoguearse.email,{max : 6000})
		} ;
	}	
	




};




module.exports = usersController;