'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
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
      description: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      sale: {
        type: Sequelize.TINYINT(1),
        allowNull: false
      },

      createAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      product_id:{
        type: Sequelize.INTEGER,
        references:{
          model :'Product',  // Nombre de la tabla de Roles
          key:'id'  // Clave primaria de la tabla de Role
        }
      }


    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
