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
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      sale: {
        type: Sequelize.BOOLEAN,
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
      categories_id:{
        type: Sequelize.INTEGER,
        references:{
          model :'categories',  // Nombre de la tabla de categories
          key:'id'  // Clave primaria de la tabla de categories
        }
      }


    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
