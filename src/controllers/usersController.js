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
};

module.exports = usersController;