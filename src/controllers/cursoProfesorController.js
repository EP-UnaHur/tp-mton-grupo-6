const {Profesor, Curso} = require('../db/models')
const {Curso_Profesor} = require('../db/models')

const controller = {}

const getCursosProfesoresById = async(req, res) => {
    const idCurso = req.params.id
    const cursoProfesor = await Curso_Profesor.findOne({
        where: {
            cursoId: idCurso
        }
    })
    if (cursoProfesor)
        res.status(201).json(cursoProfesor)
    else
        res.status(404).json('error')
}

controller.getCursosProfesoresById = getCursosProfesoresById

const crearDentro = async (req, res)=>{
    const idCurso = req.params.id
    const nuevoCursoProfesor = await Curso_Profesor.map(e => create({
        idCurso: idCurso,
        idProfesor: e.id
    }))
    res.status(201).json(nuevoCursoProfesor)
}

controller.crearDentro = crearDentro
/*
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
*/

module.exports = controller
