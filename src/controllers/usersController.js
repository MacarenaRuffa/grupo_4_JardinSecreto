const usersController = {
    register: (req,res) => {
        res.render('register');
    },
    login: (req,res) => {
        res.render('login');
    },
    /*product_edit:(req,res) => {
        res.render('product-edit');
    }*/
};

module.exports = usersController;