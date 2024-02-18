require('dotenv').config();
const express = require('express');
const session = require('express-session');
const {body, validationResult} = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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

//ver uso 
app.use(passport.initialize());
app.use(passport.session());

app.use(userRemember);

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);



const users = [
    { id: 1, username: 'admin', password: 'admin', isAdmin: true },
    { id: 2, username: 'usuario', password: 'usuario', isAdmin: false }
];

passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false, { message: 'Credenciales inválidas' });
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/register');
}

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', passport.authenticate('local', {
    successRedirect: '/carrito',
    failureRedirect: '/register',
    failureFlash: true
}));

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/carrito',
    failureRedirect: '/login',
    failureFlash: true
}));

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/create');
}

app.get('/create', (req, res) => {
    res.render('create');
});

app.post('/create', passport.authenticate('local', {
    successRedirect: '/carrito',
    failureRedirect: '/create',
    failureFlash: true
}));

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/edit');
}

app.get('/edit', (req, res) => {
    res.render('edit');
});

app.post('/edit', passport.authenticate('local', {
    successRedirect: '/carrito',
    failureRedirect: '/edit',
    failureFlash: true
}));

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