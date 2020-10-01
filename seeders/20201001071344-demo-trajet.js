'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trajets', [{
      id_vehicules: '1',
        date: new Date(),
        trajet_start: '1234',
        trajet_end: '12345',
        commentaire: 'embouteillé',
        type_deplacement: 'boulot',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trajets', null, {});
  }
};