'use strict';
const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            Category.hasMany(models.Products, { // Esta relacion es de muchos a muchos 
                foreignKey: "categories_id",
                as: "products" // esto es el alias de la relacion 
            });

        }
    }
    Category.init({
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            sequelize,
            modelName: 'Category',
            timestamps: false
        });

    return Category;
};