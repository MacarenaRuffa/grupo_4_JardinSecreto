'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Product.belongsTo(models.Product, { 
        as: 'product',
        foreignKey: 'products_id',
        });
      User_Product.belongsTo(models.User, { // TODO: aqui el as y el foreignkey no deberia ser en singular?
         as: 'users',
         foreignKey: 'users_id',
       });
    }
  }
  User_product.init({
    name: {
      type: dataTypes.STRING(45),
          allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User_product',
    tableName: 'user_products'
  });
  return User_Product;
};
