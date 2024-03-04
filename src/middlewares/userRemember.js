
const db = require("../database/models");

function userRemember(req, res, next) {

    if (req.session.user) {
        res.locals.user = req.session.user
    }

    if (req.cookies.recordame && !req.session.user) {
        const userEmail = req.cookies.recordame;

        db.User.findOne({ where: { email: userEmail }, include: ['role'] })
            .then(user => {
                if (user) {
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role.name,
                    };
                }
                next();
            })
            .catch(error => {
                console.error("Error al buscar usuario en la base de datos:", error);
                next();
            });
    } else {
        next();
    }
}

module.exports = userRemember;