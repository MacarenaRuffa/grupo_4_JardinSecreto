'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.User, {
        foreignKey: 'roles_id',
        as: 'role'
      })
  }
  }
    User.init({
   
      name: {
          type: dataTypes.STRING(45),
          allowNull: false
      },
      user_name: {
          type: dataTypes.STRING(45),
          allowNull: false
      },
      email: {
          type: dataTypes.STRING(64),
          allowNull: false
      },
      birthday: {
          type: dataTypes.DATE,
          allowNull: false
      },
      gender: {
          type: dataTypes.STRING(45),
          allowNull: false
      }
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    });
    return User;
  };