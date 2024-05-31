const {Router} = require('express')
const {Curso} = require('../db/models')
const controller = require('../controllers/controller')


const route = Router()

route.get('/cursos', controller.getAll(Curso))

route.get('/cursos/:id', controller.getById(Curso))

route.delete('/cursos/:id', controller.eliminar(Curso))

route.put('/cursos/:id', controller.modificar(Curso))


module.exports = route