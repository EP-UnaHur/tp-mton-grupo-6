const {Router} = require('express')
const {Materia} = require('../db/models')
const {Curso} = require('../db/models')
const controller = require('../controllers/controller')

const route = Router()

route.get('/materias', controller.getAll(Materia))

route.get('/materias/:id', controller.getById(Materia))

route.delete('/materias/:id', controller.eliminar(Materia))

route.post('/materias/:id/curso', controller.crearDentro(Materia, Curso, 'materiaId'))

route.get('/materias/:id/cursos', controller.verRelacionados(Materia, Curso, 'cursos'))


module.exports = route