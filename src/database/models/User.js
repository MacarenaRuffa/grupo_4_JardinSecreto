'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: 'roles_id',
        as: 'role'
      })
  }
  }
    User.init({
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
      gender: {
          type: DataTypes.STRING(45),
          allowNull: false
      },
      roles_id: {// llave foranea 
        type: DataTypes.INTEGER,
      },
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    });
    return User;
  };