'use strict';
const bcript = require("bcryptjs")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Agustina Peralta',
      user_name: 'agperalta',
      email: 'agustinaperalta@gmail.com',
      password: bcript.hashSync('12345678', 10),
      roles_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Macarena Ruffa',
      user_name: 'macaruffa',
      email: 'maca@gmail.com',
      password: bcript.hashSync('12345678', 10),
      birthday: "",
      gender: "",
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
