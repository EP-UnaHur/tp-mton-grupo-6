const {Router} = require('express')
const {Carrera} = require('../db/models')
const userController = require('../controllers/carrera.controller')
const { includes } = require('lodash');

const route = Router()

route.get('/carreras', userController.getAllCarreras)

route.get('/carreras/:id', userController.carreraById)

route.post('/carreras', userController.crearCarrera)

route.post('/carreras/:id/materia', userController.crearMateria)

route.get('/carreras/:id/materias', userController.verMateriasDeCarrera)


module.exports = route