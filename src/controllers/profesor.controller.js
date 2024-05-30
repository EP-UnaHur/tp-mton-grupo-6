const {Profesor} = require('../db/models')

const controller = {}

const getAllProfesores = async (req, res)=>{
    res.status(200).json(await Profesor.findAll({}))
}

controller.getAllProfesores = getAllProfesores

const profesorById = async (req, res)=>{
    const id = req.params.id
    res.status(200).json(await Profesor.findByPk(id))
}

controller.profesorById = profesorById

const crearProfesor = async (req, res)=>{
    const profesor = await Profesor.create(req.body)
    res.status(201).json(profesor)
}

controller.crearProfesor = crearProfesor

const modificarProfesor = async (req, res)=>{
    const id = req.params.id;
    await Profesor.update(
        req.body,
        {
            where: {id}
        }
    )
    res.status(200).json(`El profesor con id ${id} se modifico con exito.`)
}

controller.modificarProfesor = modificarProfesor

const eliminarProfesor = async (req, res)=>{
    const id = req.params.id
    await Profesor.destroy({where: {id}})
    res.status(200).json(`El profesor con id ${id} se elimino con exito`)
}

controller.eliminarProfesor = eliminarProfesor

module.exports = controller