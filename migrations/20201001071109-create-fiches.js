'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fiches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      compteur_start: {
        type: Sequelize.INTEGER
      },
      compteur_end: {
        type: Sequelize.INTEGER
      },
      compteur_distance: {
        type: Sequelize.INTEGER
      },
      total_indemnite: {
        type: Sequelize.INTEGER
      },
      total_km_parcourus: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Fiches');
  }
};