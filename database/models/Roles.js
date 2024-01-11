module.exports = (sequelize, dataTypes) => {
    let alias = 'Roles';
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
        
    };
 
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'roles'
    }
    const Roles = sequelize.define(alias, cols, config); 

    Roles.associate = function (models) {
        Roles.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "user_roles",
            foreignKey: 'roles_id'
        })
    }
   
    return Roles;
};