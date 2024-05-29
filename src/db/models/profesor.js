'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profesor.belongsToMany(models.Curso, {
        //as: 'cursos',
        //foreignKey: 'profesorID'
        through: 'Cursos_Profesor'
      })
    }
  }
  Profesor.init({
    nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    legajo: DataTypes.NUMBER,
    activo: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Profesor',
    timestamps: false
  });
  return Profesor;
};