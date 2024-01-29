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
      Products.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categories"
      });
    }
  }
  Products.init({
    name: {
      type: DataTypes.STRING(45),
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
    sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    categories_id: {
      type: DataTypes.INTEGER,
    }},
   {
      sequelize,
      modelName: 'Product',
    });
  return Products;
};