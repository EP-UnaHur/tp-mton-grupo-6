const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const profesorSchema = Joi.object().keys({

    nombre: Joi.string().required().min(2).max(20).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"
    }),

    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "fechaNacimiento es requerido"
    }),

    legajo: Joi.number().optional().integer().positive().messages({
        "number.positive": "legajo debe ser un numero positivo"
    }),

    activo: Joi.number().required().integer().positive().max(1).messages({
        "number.max": `activo solo puede ser 0 o 1.`,
        "number.positive": "activo debe ser un numero positivo",
        "number.empty": "activo no puede ser vacio",
        "any.required": "activo es requerido"
    }),

})

module.exports = profesorSchema