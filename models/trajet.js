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

    id_vehicules: DataTypes.INTEGER,
    date: DataTypes.DATE,
    trajet_start: DataTypes.STRING,
    trajet_end: DataTypes.STRING,
    commentaire: DataTypes.STRING,
    type_deplacement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trajet',
  });
  return Trajet;
};