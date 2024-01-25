'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      user_name: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      email: {
          type: Sequelize.STRING(64),
          allowNull: false
      },
      birthday: {
          type: Sequelize.DATE,
          allowNull: false
      },
      gender: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      roles_id: { // TODO: aqui entiendo que deberia ser singular es correcto?
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', // TODO: igual aqui
          key: 'id'
        }
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
    await queryInterface.dropTable('users');
  }
};
