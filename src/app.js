require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { body, validationResult } = require('express-validator');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const userRemember = require('./middlewares/userRemember');

const apiProductsRouter = require('./routes/api/productsAPI');
const apiUsersRouter = require('./routes/api/usersAPI');
const app = express();
const cors = require('cors');

const PORT = 3306;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(
  session({
    secret: '1234567',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(userRemember);

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);
// Ruta para contar las categorías
// app.get('/api/products/count-categories', async (req, res) => {
//   try {
//     // MODIFICAR O BORRAR!! No funciona el count Category, no lo logra buscar en el react (intuyo ruteo o palabras)


//     const categoryCounts = await Product.aggregate([
//       { $group: { _id: '$category', count: { $sum: 1 } } },
//     ]);

//     res.json({ categoryCounts });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.get('/logout', (req, res) => {
  delete req.session.user;
  res.clearCookie('recordame')
  res.redirect('/');
});

const port = process.env.PORT || 3306;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

module.exports = app;
