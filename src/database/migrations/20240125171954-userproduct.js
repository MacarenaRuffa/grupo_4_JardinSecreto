'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userproduct', {
      users_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'User', // Nombre de la tabla de usuarios
          key: 'id' // Clave primaria de la tabla de usuarios
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      products_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Product', // Nombre de la tabla de productos
          key: 'id' // Clave primaria de la tabla de productos
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('userproduct');
  }
};
