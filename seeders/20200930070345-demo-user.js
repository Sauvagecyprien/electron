'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      nom: 'cyprien',
      prenom : 'sauvage',
      entreprise : 'test',
      email: 'cyprien.sauvage974@gmail.com',
      password: '$2a$12$cm8QniBKR29rngp34NAxGOtncXbFp9ueXygSDYUw9c1q06iyHDECK',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
