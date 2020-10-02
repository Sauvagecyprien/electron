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
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    marques: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    modele: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    puissance: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    annee: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    immatriculations: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Vehicule',
  });
  return Vehicule;
};