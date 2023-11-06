//aca irian los metodos que recibiran datos de productos y devolveran la info correspondiente
// create, edit, detail, list
//productCart y productDetail
const productsController = {
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    productCart: (req,res) => {
        res.render('productCart');
    },
    productEdit: (req,res) => {
        res.render('productEdit');
    },
    productCreate: (req,res) => {
        res.render('productCreate');
    },
    products: (req,res) => {
        res.render('productList');
    }
};

module.exports = productsController;