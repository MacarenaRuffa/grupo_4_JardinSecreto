'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(250)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      role_id:{
        type: Sequelize.INTEGER,
        references:{
          model :'Role',  // Nombre de la tabla de Roles
          key:'id'  // Clave primaria de la tabla de Role
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};