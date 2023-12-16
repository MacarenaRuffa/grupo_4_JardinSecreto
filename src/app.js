const express = require('express');




const path = require('path');

const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const session = require('express-session');



const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const exp = require('constants');

const userRemember = require('./middlewares/userRemember');




const app = express();



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

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.use(userRemember);



<<<<<<< HEAD
=======

//<<<<<<< HEAD =======

//>>>>>>> af94df20f5aed2a6cc77f6864634527f09eca542
>>>>>>> f32f6ada64b9a3c799a0c4fcf9d21a4f011f3766
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/index.html'));
// });

// app.get('/productCart', (req, res) => { 
//     res.sendFile(path.join(__dirname, 'views/productCart.html'));
// });

// app.get('/productDetail-azalea', (req, res) => { 
//     res.sendFile(path.join(__dirname, 'views/productDetail-azalea.html'));
// });

// app.post('/productDetail', (req, res) => { 
//     res.redirect('/');
// });

// app.get('/productDetail-alegriadelHogar', (req, res) => { 
//     res.sendFile(path.join(__dirname, 'views/productDetail-alegriadelHogar.html'));
// });

// app.post('/productDetail', (req, res) => { 
//     res.redirect('/');
// });

// app.get('/register', (req, res) => { 
//     res.sendFile(path.join(__dirname, 'views/register.html'));
// });

// app.post('/register', (req, res) => { 
//     res.redirect('/');
// });

// app.get('/login', (req, res) => { 
//     res.sendFile(path.join(__dirname, 'views/login.html'));
// });

// app.post('/login', (req, res) => { 
//     res.redirect('/');
// });

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

module.exports = app;