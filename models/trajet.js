'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trajet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trajet.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    id_vehicules: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true
    },
    trajet_start: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    trajet_end: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    commentaire: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    type_deplacement: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Trajet',
  });
  return Trajet;
};