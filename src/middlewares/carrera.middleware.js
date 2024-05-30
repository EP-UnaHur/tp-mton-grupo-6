
const existsById = (Model) => {
    return async (req, res ,next) => {
        const id = req.params.id
        const instancia = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        if (!instancia){
            res.status(404).json({mensaje: `${modelName} con id ${id} no existe.`})
        }
        next()
    }
}

module.exports = {existsById}