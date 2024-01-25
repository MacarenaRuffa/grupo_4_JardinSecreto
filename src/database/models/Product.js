module.exports = (sequelize, dataTypes) => {
    let alias = 'Products'; // TODO: no deberia ser singular?
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description:{
            type: dataTypes.STRING(300),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(45),
            allowNull: true
        },
        sale:{
            type: dataTypes.TINYINT(1),
            allowNull: false
        }
       
        
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'roles'
    }
    const Products = sequelize.define(alias, cols, config); 

    Products.associate = function (models) {
        Products.hasMany(models.Category, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "category_prduct",
            foreignKey: "categories_id"
        });
    }


    return Products;
};