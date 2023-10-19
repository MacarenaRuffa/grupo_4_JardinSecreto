//aca irian los metodos que recibiran datos de clientes y devolveran la info correspondiente
//login, register, profile, search

const usersController = {
    register: (req,res) => {
        res.send('Acá muestro vista con el registro de usuario')
    },
    login: (req,res) => {
        res.send('Acá muestro vista con el inicio de sesion de usuario')
    },
    profile: (req,res) => {
        res.send('Acá muestro vista para ver el perfil del usuario')
    },
    search: (req,res) => {
        res.send ('Acá muestro vista para buscar un usuario')
    }
};

module.exports = usersController;