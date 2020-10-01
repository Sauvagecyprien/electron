'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicules', [{
      marques: 'renault',
      modele : 'clio V',
      puissance : 'test',
      annee: '22/05/2015',
      immatriculations: 'cvc445dfd',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehicules', null, {});
  }
};

