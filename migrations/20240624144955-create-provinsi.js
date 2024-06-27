'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Provinsis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama: {
        type: Sequelize.STRING
      },
      Diresmikan: {
        type: Sequelize.STRING
      },
      Foto: {
        type: Sequelize.STRING
      },
      Pulau: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Provinsis');
  }
};