'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
      gender: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      roles_id: {// llave foranea 
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', 
          key: 'id'
        }
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
