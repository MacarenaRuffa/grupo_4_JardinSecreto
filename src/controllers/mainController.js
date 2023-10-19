//aca irian los metodos que recibiran datos de pagina y devolveran la info correspondiente
//home, contact, about us

const mainController = {
    home: (req,res) => {
        res.send('Acá muestro vista con la home')
    },
    contact: (req,res) => {
        res.send('Acá muestro vista con el contacto')
    },
    aboutUs: (req,res) => {
        res.send('Acá muestro vista sobre nosotros')
    },
};

module.exports = mainController;