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

	processLogin: (req, res) => {
	const {user1, password} = req.body;
	let userFound = users.find((user) => user.username === user1);

	if(!userFound ){
		return res.status(404).render('nologin');

	}
	if(!bcrypt.compareSync(password,userFound.password)){
		return res.status(500).render('error');
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

	nologin(req,res){
	  	res.render('nologin');
	  }
	




};




module.exports = usersController;