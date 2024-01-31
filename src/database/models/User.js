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
        type: DataTypes.STRING(45),
        allowNull: false
      },
      user_name: {
          type: DataTypes.STRING(45),
          allowNull: false
      },
      email: {
          type: DataTypes.STRING(64),
          allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
      birthday: {
          type: DataTypes.DATE,
          allowNull: true
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