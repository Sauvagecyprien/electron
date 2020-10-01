'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entreprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Entreprise.init({
    nom_entreprise: DataTypes.STRING,
    type_entreprise: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entreprise',
  });
  return Entreprise;
};