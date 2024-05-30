const {Materia} = require('../db/models')
const {Curso} = require('../db/models')

const controller = {}

const getAllMaterias = async (req, res)=>{
    res.status(200).json(await Materia.findAll({}))
}

controller.getAllMaterias = getAllMaterias

const materiaById = async (req, res)=>{
    const id = req.params.id
    res.status(200).json(await Materia.findByPk(id))
}

controller.materiaById = materiaById

const eliminarMateria = async (req, res)=>{
    const id = req.params.id
    await Materia.destroy({where: {id}})
    res.status(200).json(`La materia con id ${id} se elimino con exito.`)
}

controller.eliminarMateria = eliminarMateria

const crearCurso = async (req, res)=>{
    const idMateria = req.params.id
    const materia = await Materia.findByPk(idMateria)
    const updateMateria = await Curso.create({materiaId:materia.id, ...req.body})
    res.status(201).json(updateMateria)
}

controller.crearCurso = crearCurso

const verCursosDeMateria = async (req, res)=>{
    const id = req.params.id;
    const materia = await Materia.findOne(
        {
            where: {id},
            include:[
                {
                    model: Curso,
                    as: 'cursos'
                }
                ]
        });
    res.status(200).json(materia)
}

controller.verCursosDeMateria = verCursosDeMateria

module.exports = controller