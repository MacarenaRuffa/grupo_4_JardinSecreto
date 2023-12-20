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
			id: users[users.length - 1].id + 1,
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file?.filename || "default-image.png"
		};
		users.push(newUser);
		fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
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
    req.session.user = userFound;
	return res.redirect('/')
	},

	
	remember(req,res) {
		req.session.usuarioLogueado=usuariologuearse;
		
		if (req.body.recordame != undefined){
		res.cookie('recordame', usuarioALoguearse.email,{maxAge: 60000})
		} ;
	},
	
	errorcontroller(req,res){
		res.render('error');
	},

	logout:(req, res) => {
        delete req.session.user;
        return res.redirect('/');
    }
	
};




module.exports = usersController;