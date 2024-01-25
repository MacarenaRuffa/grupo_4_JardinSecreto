module.exports = (sequelize, dataTypes) => {
    let alias = 'Users'; // TODO: No deberia ser singular?
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        user_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(64),
            allowNull: false
        },
        birthday: {
            type: dataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'roles' // TODO: Aqui no seria users?
    }
    const Users = sequelize.define(alias, cols, config); 

    Users.associate = function (models) {  //  TODO: cual es la relacion entre user y roles? aqui la relacion es de User a User
        Users.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js // TODO: deberia ser singular
            as: "user_roles", 
            foreignKey: "id"
        })
    }

    return Users;
};