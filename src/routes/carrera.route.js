const {Router} = require('express')
const {Carrera, Materia} = require('../db/models')
const controller = require('../controllers/controller')
const middleware = require('../middlewares/middleware')
const carreraSchema = require('../schemas/carrera.schema')
const materiaSchema = require('../schemas/materia.schema')

const route = Router()

route.get('/carreras', controller.getAll(Carrera))

route.get('/carreras/:id', middleware.existsById(Carrera), controller.getById(Carrera))

route.post('/carreras', middleware.validaSchema(carreraSchema) ,controller.crear(Carrera))

route.post('/carreras/:id/materia', middleware.existsById(Carrera), middleware.validaSchema(materiaSchema) ,controller.crearDentro(Carrera, Materia, 'carreraId'))

route.get('/carreras/:id/materias', middleware.existsById(Carrera), controller.verRelacionados(Carrera, Materia, 'materias'))


module.exports = route