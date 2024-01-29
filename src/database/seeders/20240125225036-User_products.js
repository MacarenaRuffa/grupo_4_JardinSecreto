'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Product', [{
        name: "Alegria del hogar",
        description: "Planta de exterior",
        price: 600,
        discount: 10,
        category: "",
        image: "PE-Alegria_del_Hogar.png",
        sale: "in-sale",
        isBetaMember: false
      },
      
      {
        "name": "Azalea",
        "description": "son los arbustos de flores del género Rhododendron",
        "price": 4500,
        "discount": 15,
        "category": "Exterior",
        "image": "PE-Azalea.png",
        "sale": "no-sale"
      }
      ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Product', null, {});
     
  }
};
