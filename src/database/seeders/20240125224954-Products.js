'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: "Alegria del hogar",
        description: "Planta de exterior que irradia frescura y vitalidad. Sus exuberantes hojas y vibrantes flores",
        price: 600,
        image: "PE-Alegria_del_Hogar.png",
        sale: "in-sale",
        createdAt: new Date(),
        updatedAt: new Date(),
        categories_id: 1
      },
      {
        name: "Azalea",
        description: "Amplia gama de tonalidades, que van desde blancos puros y rosados suaves hasta rojos intensos",
        price: 4500,
        image: "PE-Azalea.png",
        sale: "no-sale",
        createdAt: new Date(),
        updatedAt: new Date(),
        categories_id: 1
      },
      {
        name: "Kit para jardin",
        description: "Kit de tres herramientas para el jardin pala, palita y rastillo",
        price: 7300,
        image: "HE-Kit_jardin.png",
        sale: "in-sale",
        createdAt: new Date(),
        updatedAt: new Date(),
        categories_id: 3
      },
      {
        name: "Semillas de margarita",
        description: "Son pequeñas y alargadas, generalmente de color marrón claro. Estas semillas se pueden encontrar en el centro de la cabeza de la margarita después de que ha florecido. ",
        price: 1000,
        image: "SE-Margarita.png",
        sale: "in-sale",
        createdAt: new Date(),
        updatedAt: new Date(),
        categories_id: 4
      },
      {
        name: "Semillas de girasol",
        description: "Las semillas para plantar girasoles son pequeñas, en forma de óvalo, de color negro o marrón oscuro. Tienen una cubierta dura que debe ablandarse antes de la siembra para facilitar la germinación",
        price: 1000,
        image: "SE-Girasol_multifloral.png",
        sale: "no-sale",
        createdAt: new Date(),
        updatedAt: new Date(),
        categories_id: 4
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('products', null, {});
  }
};