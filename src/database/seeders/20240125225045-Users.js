'use strict';
const bcript = require("bcryptjs")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Agustina Peralta',
      email: 'agustinaperalta@gmail.com',
      password: bcript.hashSync('12345678', 10),
      gender: "femenino",
      roles_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Macarena Ruffa',
      email: 'maca@gmail.com',
      password: bcript.hashSync('12345678', 10),
      gender: "femenino",
      roles_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
