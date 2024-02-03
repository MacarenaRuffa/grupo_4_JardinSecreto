'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "categories_id",
        as: "category"
      });
    }
  }
  Product.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    in_sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    categories_id: {
      type: DataTypes.INTEGER,
    }},
   {
      sequelize,
      modelName: 'Product',
      tableName: 'products'
    });
  return Product;
};