'use strict';
import { Model } from 'sequelize';
export default (sequelize, dataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            Category.hasMany(models.Products, { // Esta relacion es de muchos a muchos 
                foreignKey: "categories_id",
                as: "category_prduct" // esto es el alias de la relacion 
            });

        }
    }
    Category.init({
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            sequelize,
            modelName: 'Category',
        });

    let alias = 'Category';
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
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Products, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "category_prduct",
            foreignKey: "categories_id"
        })
    }

    return Category;
};