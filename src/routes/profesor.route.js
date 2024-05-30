const {Router} = require('express')
const profesorController = require('../controllers/profesor.controller')

const route = Router()

route.get('/profesores', profesorController.getAllProfesores)

route.get('/profesores/:id', profesorController.profesorById)

route.post('/profesores', profesorController.crearProfesor)

route.put('/profesores/:id', profesorController.modificarProfesor)

route.delete('/profesores/:id', profesorController.eliminarProfesor)


module.exports = route