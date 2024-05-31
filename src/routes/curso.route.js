const {Router} = require('express')
const {Curso} = require('../db/models')
const controller = require('../controllers/controller')
const middleware = require('../middlewares/middleware')


const route = Router()

route.get('/cursos', controller.getAll(Curso))

route.get('/cursos/:id', middleware.existsById(Curso), controller.getById(Curso))

route.delete('/cursos/:id', middleware.existsById(Curso), controller.eliminar(Curso))

route.put('/cursos/:id', middleware.existsById(Curso), controller.modificar(Curso))


module.exports = route