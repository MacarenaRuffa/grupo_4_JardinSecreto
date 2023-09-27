const express = require('express'); 
const path = require('path'); 

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port=3030;
app.listen(port, () =>{
    console.log('Servidor iniciado en: http://localhost:${port}');
})