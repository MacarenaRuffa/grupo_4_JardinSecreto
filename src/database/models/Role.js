'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.belongsTo(models.User, {  //relacion de uno a uno 
          as: "user_roles",
          foreignKey: 'roles_id'
    })
    
  }
  }
  Role.init({
    name: {
      type: DataTypes.STRING(250)
    }
  }, {
    sequelize,
    modelName: 'Role',
    timestamps: false,
    tableName: 'roles'
  });
  return Role;
};