const {Router} = require('express')
const {Profesor} = require('../db/models')
const controller = require('../controllers/controller')
const middleware = require('../middlewares/middleware')
const profesorSchema = require('../schemas/profesor.schema.js')

const route = Router()

route.get('/profesores', controller.getAll(Profesor))

route.get('/profesores/:id', middleware.existsById(Profesor), controller.getById(Profesor))

route.post('/profesores', middleware.validaSchema(profesorSchema), controller.crear(Profesor))

route.put('/profesores/:id', middleware.existsById(Profesor), controller.modificar(Profesor))

route.delete('/profesores/:id', middleware.existsById(Profesor), controller.eliminar(Profesor))


module.exports = route