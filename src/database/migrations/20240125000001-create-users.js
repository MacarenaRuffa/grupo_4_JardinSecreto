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
        type: Sequelize.STRING(45),
        allowNull: false
      },
      user_name: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      email: {
          type: Sequelize.STRING(64),
          allowNull: false
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
      birthday: {
          type: Sequelize.DATE,
          allowNull: true
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
