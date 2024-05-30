const {Router} = require('express')
const cursoController = require('../controllers/curso.controller')

const route = Router()

route.get('/cursos', cursoController.getAllCursos)

route.get('/cursos/:id', cursoController.cursoById)

route.delete('/cursos/:id', cursoController.eliminarCurso)

route.put('/cursos/:id', cursoController.modificarCurso)


module.exports = route