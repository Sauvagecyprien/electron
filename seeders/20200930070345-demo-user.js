'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      nom: 'sauvage',
      prenom : 'cyprien',
      entreprise : 'nouloutou',
      email: 'example@example.com',
      password: 'test',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
