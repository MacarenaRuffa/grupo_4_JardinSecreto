//aca irian los metodos que recibiran datos de productos y devolveran la info correspondiente
// create, edit, detail, list

const productController = {
    index: (req,res) => {
        res.send('Acá muestro vista con la lista de productos')
    },
    show: (req,res) => {
        res.send('Acá muestro vista con el detalle de un producto')
    },
    create: (req,res) => {
        res.send('Acá muestro vista para crear un producto')
    },
    edit: (req,res) => {
        res.send ('Acá muestro vista para editar un producto')
    }
};

module.exports = productController;