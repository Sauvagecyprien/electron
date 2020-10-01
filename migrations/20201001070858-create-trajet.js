'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trajets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_vehicules: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      trajet_start: {
        type: Sequelize.STRING
      },
      trajet_end: {
        type: Sequelize.STRING
      },
      commentaire: {
        type: Sequelize.STRING
      },
      type_deplacement: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trajets');
  }
};