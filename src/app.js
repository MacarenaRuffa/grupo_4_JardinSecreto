const express = require('express'); 
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/product-cart', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views/productCart.html'));
});

app.get('/product-detail', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views/productDetail.html'));
});
app.post('/product-detail', (req, res) => { 
    res.redirect('/');
});

app.get('/register', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views/register.html'));
});
app.post('/register', (req, res) => { 
    res.redirect('/');
});

app.get('/login', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views/login.html'));
});
app.post('/login', (req, res) => { 
    res.redirect('/');
});

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
