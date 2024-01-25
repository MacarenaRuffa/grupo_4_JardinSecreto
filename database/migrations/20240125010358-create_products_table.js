'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    description:{
        type: Sequelize.STRING(300),
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image:{
        type: Sequelize.STRING(45),
        allowNull: true
    },
    sale:{
        type: Sequelize.TINYINT(1),
        allowNull: false
    }
   
   
  })},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
