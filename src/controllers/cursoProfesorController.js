const {Materia} = require('../db/models')
const {Profesor} = require('../db/models')

const controller = {}

const getCursosProfesoresById = (Model, modeloSecundario, nombre) =>{
    return async(req, res) => {
    const idCurso = req.params.id
    let curso = null
    if (nombre == 'cursos') {
        curso = await Model.findByPk(idCurso, {
            include: {
                model: modeloSecundario,
                as: nombre,
                through: {
                    attributes: []
                },
                include: {
                    model: Materia,
                    as: 'materia'
                }
            }
        })
        res.status(200).json(curso)
    }
    else {
        curso = await Model.findByPk(idCurso, {
            include: {
                model: modeloSecundario,
                as: nombre,
                through: {
                    attributes: []
                }
            }
        })
        res.status(202).json(curso)
    }
    
}}

controller.getCursosProfesoresById = getCursosProfesoresById

const crearRelacion = (Model) =>{
    return async (req, res)=>{
    const idCurso = req.params.id
    const ids = req.body
    const profesoresExisten = await Profesor.findAll({
        where: {
            id: ids
        },
        attributes: ['id']
    })
    const profesoresId = profesoresExisten.map(profesor => profesor.id)

    const relaciones = profesoresId.map(idProfesor => {
        return Model.create({
            cursoId: idCurso,
            profesorId: idProfesor
        })
    })
    res.status(201).json(relaciones)
}}

controller.crearRelacion = crearRelacion

module.exports = controller
