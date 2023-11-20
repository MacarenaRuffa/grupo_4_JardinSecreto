const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.JSON');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');

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
		user.push(newUser);
		fs.writeFileSync(userFilePath, JSON.stringify(user, null, 2));
		res.redirect('/');
	}
};

module.exports = usersController;