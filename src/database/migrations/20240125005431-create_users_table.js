'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('users', {


            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
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
