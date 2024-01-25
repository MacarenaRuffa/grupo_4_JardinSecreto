'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },

      createAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');

  }
};
