const {Router} = require('express')
const {Materia} = require('../db/models')
const {Curso} = require('../db/models')
const controller = require('../controllers/controller')
const middleware = require('../middlewares/middleware')

const route = Router()

route.get('/materias', controller.getAll(Materia))

route.get('/materias/:id', middleware.existsById(Materia), controller.getById(Materia))

route.delete('/materias/:id', middleware.existsById(Materia), controller.eliminar(Materia))

route.post('/materias/:id/curso', middleware.existsById(Materia), controller.crearDentro(Materia, Curso, 'materiaId'))

route.get('/materias/:id/cursos', middleware.existsById(Materia), controller.verRelacionados(Materia, Curso, 'cursos'))


module.exports = route