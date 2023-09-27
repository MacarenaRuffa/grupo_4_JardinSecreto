const express = require('express'); 
const path = require('path'); 

const app = express();
app.get('/', (req,res) => { res.sendFile(path.join(__dirname, '/views/index.html'))});

const port=3030;
app.listen(port, () =>{
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});