const {Curso} = require('../db/models')

const controller = {}

const getAllCursos = async (req, res)=>{
    res.status(200).json(await Curso.findAll({}))
}

controller.getAllCursos = getAllCursos

const cursoById = async (req, res)=>{
    const id = req.params.id
    res.status(200).json(await Curso.findByPk(id))
}

controller.cursoById = cursoById

const eliminarCurso = async (req, res)=>{
    const id = req.params.id
    await Curso.destroy({where: {id}})
    res.status(200).json(`El curso con id ${id} se elimino con exito.`)
}

controller.eliminarCurso = eliminarCurso

const modificarCurso = async (req, res)=>{
    const id = req.params.id;
    await Curso.update(
        req.body,
        {
            where: {id}
        }
    )
    res.status(200).json(`El curso con id ${id} se modifico con exito.`)
}

controller.modificarCurso = modificarCurso

module.exports = controller