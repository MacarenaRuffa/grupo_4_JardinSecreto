require('dotenv').config();
const express = require('express');
const session = require('express-session');
const {body, validationResult} = require('express-validator');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const userRemember = require('./middlewares/userRemember');
const app = express();

const PORT = 3306;  // Cambié el nombre de la variable a PORT para evitar conflictos

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: '1234567',
    resave: false,
    saveUninitialized: true,
}));
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(userRemember);

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes)

const users = [
    { id: 1, username: 'admin', password: 'admin', isAdmin: true },
    { id: 2, username: 'usuario', password: 'usuario', isAdmin: false }
];

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/register');
}

app.get('/register', (req, res) => {
    res.render('register');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.get('/login', (req, res) => {
    res.render('login');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/create');
}

app.get('/create', (req, res) => {
    res.render('create');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/edit');
}

app.get('/edit', (req, res) => {
    res.render('edit');
});

app.get('/carrito', isAuthenticated, (req, res) => {
    res.render('carrito', { user: req.user });
});

app.get('/logout', (req, res) => {
    delete req.session.user;
    //req.logout();
    res.redirect('/');
});

const port = process.env.PORT || 3306;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

module.exports = app;