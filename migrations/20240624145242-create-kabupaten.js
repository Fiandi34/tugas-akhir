'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kabupatens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama: {
        type: Sequelize.STRING
      },
      Provinsi_id: {
        type: Sequelize.STRING
      },
      Diresmikan: {
        type: Sequelize.STRING
      },
      Foto: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kabupatens');
  }
};