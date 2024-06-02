const {Router} = require('express')
const {Curso, Profesor} = require('../db/models')
const {Curso_Profesor} = require('../db/models')
const cursoProfesorController = require('../controllers/cursoProfesorController')
const middleware = require('../middlewares/middleware')
const cursoProfesorSchema = require('../schemas/cursoProfesor.schema.js')

const route = Router()

route.post('/cursos/:id/profesores',middleware.existsById(Curso),  middleware.validaSchema(cursoProfesorSchema), cursoProfesorController.crearRelacion(Curso_Profesor))

route.get('/cursos/:id/profesores', middleware.existsById(Curso), cursoProfesorController.getCursosProfesoresById(Curso, Profesor, 'profesores'))

route.get('/profesores/:id/cursos', middleware.existsById(Profesor), cursoProfesorController.getCursosProfesoresById(Profesor, Curso, 'cursos'))

module.exports = route