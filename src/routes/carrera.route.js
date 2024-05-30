const {Router} = require('express')
const carreraController = require('../controllers/carrera.controller')

const route = Router()

route.get('/carreras', carreraController.getAllCarreras)

route.get('/carreras/:id', carreraController.carreraById)

route.post('/carreras', carreraController.crearCarrera)

route.post('/carreras/:id/materia', carreraController.crearMateria)

route.get('/carreras/:id/materias', carreraController.verMateriasDeCarrera)


module.exports = route