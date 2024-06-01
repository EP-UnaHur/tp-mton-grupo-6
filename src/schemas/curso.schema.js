const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const cursoSchema = Joi.object().keys({

    comision: Joi.string().optional().min(1).max(3).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`
    }),

    turno: Joi.string().min(5).max(6).required().messages({
        "string.min": "El turno debe ser mañana, tarde o noche.",
        "string.max": "El turno debe ser mañana, tarde o noche.",
        "any.custom": "El turno debe ser mañana tarde o noche",
        "any.required": "nombre es requerido"
    }),

    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "fechaInicio es requerido"
    }),

    fechaFin: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "fechaFin es requerido"
    })

})

module.exports = cursoSchema