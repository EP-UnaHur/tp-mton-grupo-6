const Joi = require('joi')
const validateId = require('../ultis/id.validator.js')


const cursoProfesorSchema = Joi.array().items(Joi.number().integer().required()).required().messages({
    'array.base': 'El cuerpo de la solicitud debe ser un array.',
    'array.includes': 'Cada elemento en el array debe ser un número.',
    'any.required': 'profesores debe ser una lista de ids'
});

module.exports = cursoProfesorSchema