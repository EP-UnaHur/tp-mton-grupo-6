const {Router} = require('express')
const materiaController = require('../controllers/materia.controller')

const route = Router()

route.get('/materias', materiaController.getAllMaterias)

route.get('/materias/:id', materiaController.materiaById)

route.delete('/materias/:id', materiaController.eliminarMateria)

route.post('/materias/:id/curso', materiaController.crearCurso)

route.get('/materias/:id/cursos', materiaController.verCursosDeMateria)


module.exports = route