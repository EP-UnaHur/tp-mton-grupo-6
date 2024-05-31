const {Router} = require('express')
const {Profesor} = require('../db/models')
const controller = require('../controllers/controller')

const route = Router()

route.get('/profesores', controller.getAll(Profesor))

route.get('/profesores/:id', controller.getById(Profesor))

route.post('/profesores', controller.crear(Profesor))

route.put('/profesores/:id', controller.modificar(Profesor))

route.delete('/profesores/:id', controller.eliminar(Profesor))


module.exports = route