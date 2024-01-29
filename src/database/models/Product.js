'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Products.hasMany(models.Category, { 
            as: "category_prduct",
            foreignKey: "categories_id"
        });
    }
  }
  Products.init({
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
        allowNull: false
        }
  },
   {
    sequelize,
    modelName: 'Product',
  });
  return Products;
};