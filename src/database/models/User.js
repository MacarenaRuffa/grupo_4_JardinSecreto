module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
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
        tableName: 'roles'
    }
    const Users = sequelize.define(alias, cols, config); 

    Users.associate = function (models) {
        Users.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "user_roles",
            foreignKey: "id"
        })
    }

    return Users;
};