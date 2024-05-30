const {Router} = require('express')
const {Carrera} = require('../db/models')
const carreraController = require('../controllers/carrera.controller')
const middleware = require('../middlewares/carrera.middleware')

const route = Router()

route.get('/carreras', carreraController.getAllCarreras)

route.get('/carreras/:id', middleware.existsById(Carrera), carreraController.carreraById)

route.post('/carreras', carreraController.crearCarrera)

route.post('/carreras/:id/materia', carreraController.crearMateria)

route.get('/carreras/:id/materias', carreraController.verMateriasDeCarrera)


module.exports = route