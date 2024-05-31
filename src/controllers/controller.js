
const controller = {}

const getAll = (Model) => {
    return async (req, res) => {
    res.status(200).json(await Model.findAll({}))
}}

controller.getAll = getAll

const getById = (Model) => { 
    return async (req, res)=>{
    const id = req.params.id
    res.status(200).json(await Model.findByPk(id))
}}

controller.getById = getById

const crear = (Model) => {
    return async (req, res)=>{
    const nuevo = await Model.create(req.body)
    res.status(201).json(nuevo)
}}

controller.crear = crear

const eliminar = (Model) => {
    return async (req, res)=>{
    const id = req.params.id
    const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
    await Model.destroy({where: {id}})
    res.status(200).json(`${modelName} con id ${id} se elimino con exito`)
    }
}

controller.eliminar = eliminar

const crearDentro = (modeloPrincipal, modeloSecundario, claveForanea) =>{
    return async (req, res)=>{
    const id = req.params.id
    const entidadPrincipal = await modeloPrincipal.findByPk(id)
    const crearSecundaria = await modeloSecundario.create({[claveForanea]:entidadPrincipal.id, ...req.body})
    res.status(201).json(crearSecundaria)
    }
}

controller.crearDentro = crearDentro

const verRelacionados = (modeloPrincipal, modeloSecundario, nombre) => {
    return async (req, res)=>{
        const id = req.params.id;
        const entidadPrincipal = await modeloPrincipal.findOne(
            {
                where: {id},
                include:[
                    {
                        model: modeloSecundario,
                        as: nombre
                    }
                    ]
            });
        res.status(200).json(entidadPrincipal)
    }
}

controller.verRelacionados = verRelacionados

const modificar = (Model) => {
    return async (req, res)=>{
        const id = req.params.id;

        await Model.update(
            req.body,
            {
                where: {id}
            }
        )
        res.status(200).json(await Model.findByPk(id))
    }
}

controller.modificar = modificar

module.exports = controller