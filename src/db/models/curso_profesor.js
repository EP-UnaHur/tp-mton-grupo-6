'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso_Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curso_Profesor.init({
    cursoId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso_Profesor',
  });
  return Curso_Profesor;
};