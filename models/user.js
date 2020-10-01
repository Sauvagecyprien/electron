'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    entreprise: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

// /**
//  * Define persons model
//  */
//
// const { Sequelize, DataTypes, Model } = require('sequelize');
//
// const sequelize = require('../config/database');
//
// const User = sequelize.define('users', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   nom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   prenom: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   fonction: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//
// }, { timestamps: true });
//
// module.exports = Persons;