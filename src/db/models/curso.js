'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curso.belongsTo(models.Materia, {
        as: 'materia',
        foreignKey: 'materiaId'
      })

      Curso.belongsToMany(models.Profesor, {
        //as: 'cursos',
        //foreignKey: 'profesorID'
        through: 'Cursos_Profesor'
      })
    }
  }
  Curso.init({
    comision: DataTypes.STRING,
    turno: DataTypes.STRING,
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    materiaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
    timestamps: false
  });
  return Curso;
};