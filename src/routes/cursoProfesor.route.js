const {Router} = require('express')
const {Curso, Profesor} = require('../db/models')
const controller = require('../controllers/controller')
const cursoProfesorController = require('../controllers/cursoProfesorController')
const middleware = require('../middlewares/middleware')

const route = Router()

route.post('/cursos/:id/profesores',middleware.existsById(Curso), cursoProfesorController.crearDentro())

route.get('/cursos/:id/profesores', middleware.existsById(Profesor), middleware.existsById(Curso), cursoProfesorController.getCursosProfesoresById())

module.exports = route