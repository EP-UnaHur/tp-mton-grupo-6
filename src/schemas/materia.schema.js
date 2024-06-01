const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    
    nombre: Joi.string().required().min(2).max(30).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"
    }),

    cuatrimestral: Joi.number().required().integer().positive().min(1).max(2).messages({
        "number.min": `cuatrimestral puede ser como minimo {#limit}.`,
        "number.max": `cuatrimestral puede ser como máximo {#limit}.`,
        "number.positive": "cuatrimestral debe ser un numero positivo",
        "number.empty": "cuatrimestral no puede ser vacio",
        "any.required": "cuatrimestral es requerido"
    }),

    anio: Joi.number().required().integer().positive().min(2000).max(9999).messages({
        "number.min": `anio puede ser como minimo {#limit}.`,
        "number.max": `anio puede ser como máximo {#limit}.`,
        "number.positive": "cuatrimestral debe ser un numero positivo",
        "number.empty": "cuatrimestral no puede ser vacio",
        "any.required": "cuatrimestral es requerido"
    })

})

module.exports = materiaSchema