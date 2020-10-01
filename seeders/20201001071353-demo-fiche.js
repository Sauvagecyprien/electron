'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fiches', [{
      compteur_start: '1245',
      compteur_end: '1335',
      compteur_distance: '15444',
      total_indemnite: '14',
      total_km_parcourus: '120000',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fiches', null, {});
  }
};