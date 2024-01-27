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
      Category.associate = function (models) {
        Category.hasMany(models.Products, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "category_prduct",
            foreignKey: "categories_id"
        });
    }

    }
  }
  Category.init({
    name:{
     type: DataTypes.STRING(45),
     allowNull: false
    } 
  },
   {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};