const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/user.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//const bcrypt = require('bcrypt');

const usersController = {
    register: (req,res) => {
        res.render('register');
    },
    
    login: (req,res) => {
        res.render('login');
    },

    store: (req, res) => {
		const newUser = {
			id: user[user.length - 1].id + 1,
			...req.body,
			image: req.file?.filename || "default-image.png"
		};
		user.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(user, null, 2));
		res.redirect('/');
	}
};

module.exports = usersController;