'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Plantas de exterior'      
      },
      {
        name: 'Plantas de interior'      
      },
      {
        name: 'Herramientas'      
      },
      {
        name: 'Semillas'      
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
