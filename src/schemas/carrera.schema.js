const Joi = require('joi')

const carreraSchema = Joi.object().keys({

    nombre: Joi.string().required().min(2).max(50).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    
    grado: Joi.string().required().max(10).messages({
        "string.max": `grado debe tener como máximo {#limit} caracters.`,
        "string.empty": "grado no puede ser vacio",
        "any.required": "grado es requerido"      
    }),

    universidad: Joi.string().required().min(2).max(100).messages({
        "string.min": `universidad debe tener al menos {#limit} caracters.`,
        "string.max": `universidad debe tener como máximo {#limit} caracters.`,
        "string.empty": "universidad no puede ser vacio",
        "any.required": "universidad es requerido"      
    }),
    
})

module.exports = carreraSchema