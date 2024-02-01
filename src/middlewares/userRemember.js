
const db = require("../database/models");

function userRemember(req ,res, next)
{
    next();
    if (req.cokies.recordame != undefined && req.session.usuarioLogueado == undefined);{

        let  = fs.readFileSync('userFilePath', { encoding: 'utf-8' });
        let users;
        if (usersJSON === '') {
            users = [];
        } else {
            users = JSON.parse(usersJSON);
        }
        let usuarioALoguearse

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === req.cookies.recordame) {
                    usuarioALoguearse = users[i];
                    break;
                }}
                req.session.usuarioALogueado = usuarioALoguearse;
            }}

module.exports = userRemember;