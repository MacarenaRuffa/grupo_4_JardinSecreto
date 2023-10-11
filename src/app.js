const express = require('express'); 
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/productCart', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views/productCart.html'));
});

app.get('/productDetail-azalea', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views/productDetail-azalea.html'));
});
app.post('/productDetail', (req, res) => { 
    res.redirect('/');
});
app.get('/productDetail-alegriadelHogar', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views/productDetail-alegriadelHogar.html'));
});
app.post('/productDetail', (req, res) => { 
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
