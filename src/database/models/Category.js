module.exports = (sequelize, dataTypes) => {
    let alias = 'Category'; // TODO: Si se mantiene como plurales user y product entonces este no deberia ser tambien en plural?
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
        tableName: 'category'
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Products, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "category_prduct",
            foreignKey: "category_id"
        })
    }

    return Category;
};