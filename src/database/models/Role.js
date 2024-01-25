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
      Roles.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
          as: "user_roles",
          foreignKey: 'roles_id'
    })
    
  }
  }
  Role.init({
    name: {
      type: DataTypes.STRING(200)
    }
  }, {
    sequelize,
    modelName: 'Role',
    timestamps: false,
    tableName: 'roles'
  });
  return Role;
};