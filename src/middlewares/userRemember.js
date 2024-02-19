
const db = require("../database/models");

function userRemember(req, res, next) {
    console.log(req.session.user);
    if (req.session.user){
        res.locals.user = req.session.user     
    }
    next();
    /*if (req.cookies.recordame && !req.session.usuarioLogueado) {
        const userEmail = req.cookies.recordame;

        db.User.findOne({ where: { email: userEmail } })
            .then(user => {
                if (user) {
                    req.session.usuarioLogueado = user;
                }
                next();
            })
            .catch(error => {
                console.error("Error al buscar usuario en la base de datos:", error);
                next();
            });
    } else {
        next();
    }*/
}

module.exports = userRemember;