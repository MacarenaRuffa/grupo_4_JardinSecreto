//aca irian los metodos que recibiran datos de productos y devolveran la info correspondiente
// create, edit, detail, list
//productCart y productDetail
const productController = {
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    productCart: (req,res) => {
        res.render('productCart');
    }
};

module.exports = productController;