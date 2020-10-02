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
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    compteur_start: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    compteur_end: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    compteur_distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    total_indemnite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    total_km_parcourus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Fiche',
  });
  return Fiche;
};