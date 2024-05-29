const {Router} = require('express')
const db = require('../db/models')

const route = Router()

route.get('/profesores', async (req, res)=>{
    const profesores = await db.Profesor.findAll({});
    res.status(200).json(profesores)
})

route.get('/profesores/:id', async (req, res)=>{
    const id = req.params.id
    const profesor = await db.Profesor.findOne(
        {
            where: {id},
            attributes:['id', 'nombre', 'fechaNacimiento', 'legajo', 'activo']
        })
    if (profesor) 
        res.status(200).json(profesor)
    else res.status(404).json({error: `el id ${id} no existe`})
})

route.post('/profesores', async (req, res)=>{
    try {
        const profesor = req.body
        const newProfesor = await db.Profesor.create(profesor)
        res.status(201).json(newProfesor)
    } catch (err) {    
        res.status(400).json(err.message)
    }
})

route.put('/profesores/:id', async (req, res)=>{
    const idProfesor = req.params.id;
    const newProfesor = db.Profesor.update(
        req.body,
        {
            where: {id: idProfesor}
        }
    )
    if (newProfesor) {
        res.status(200).json(`El profesor con id ${idProfesor} se modifico con exito.`)
    } else {
        res.status(404).json({error: `El id ${idProfesor} no existe.`})
    }
})

route.delete('/profesores/:id', async (req, res)=>{
    const id = req.params.id
    const row = await db.Profesor.destroy({where: {id}})
    if(row) {
     res.status(200).json(`El profesor con id ${id} se borro con exito.`)
    } else {
     res.status(404).json(`El profesor con id ${id} no existe.`)
    }
})


module.exports = route