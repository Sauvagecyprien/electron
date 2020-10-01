'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fiche extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fiche.init({
    compteur_start: DataTypes.INTEGER,
    compteur_end: DataTypes.INTEGER,
    compteur_distance: DataTypes.INTEGER,
    total_indemnite: DataTypes.INTEGER,
    total_km_parcourus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fiche',
  });
  return Fiche;
};