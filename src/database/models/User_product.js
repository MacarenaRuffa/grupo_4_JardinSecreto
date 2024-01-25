'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_product.belongsTo(User, {
        foreignKey: 'users_id',
         as: 'user' 
       });
       User_product.belongsTo(Product, { 
        foreignKey: 'products_id',
         as: 'product'
         });
    }
  }
  User_product.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_product',
    tableName: 'user_products'
  });
  return User_product;
};