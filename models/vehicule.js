'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vehicule.init({
    marques: DataTypes.STRING,
    modele: DataTypes.STRING,
    puissance: DataTypes.STRING,
    annee: DataTypes.STRING,
    immatriculations: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehicule',
  });
  return Vehicule;
};