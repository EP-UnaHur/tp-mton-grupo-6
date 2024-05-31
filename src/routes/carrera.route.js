const {Router} = require('express')
const {Carrera} = require('../db/models')
const {Materia} = require('../db/models')
const controller = require('../controllers/controller')
const middleware = require('../middlewares/exists.middleware')

const route = Router()

route.get('/carreras', controller.getAll(Carrera))

route.get('/carreras/:id', middleware.existsById(Carrera), controller.getById(Carrera))

route.post('/carreras', controller.crear(Carrera))

route.post('/carreras/:id/materia', controller.crearDentro(Carrera, Materia, 'carreraId'))

route.get('/carreras/:id/materias', controller.verRelacionados(Carrera, Materia, 'materias'))


module.exports = route