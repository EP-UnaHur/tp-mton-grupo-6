const {Router} = require('express')
const db = require('../db/models');
const { includes } = require('lodash');

const route = Router()

route.get('/carreras', async (req, res)=>{
    const carreras = await db.Carrera.findAll({});
    res.status(200).json(carreras)
})

route.get('/carreras/:id', async (req, res)=>{
    const id = req.params.id
    const carrera = await db.Carrera.findOne(
        {
            where: {id},
            attributes:['id', 'nombre', 'grado', 'universidad']
        })
    if (carrera) 
        res.status(200).json(carrera)
    else res.status(404).json({error: `el id ${id} no existe`})
})

route.post('/carreras', async (req, res)=>{
    try {
        const carrera = req.body
        const newCarrera = await db.Carrera.create(carrera)
        res.status(201).json(newCarrera)
    } catch (err) {    
        res.status(400).json(err.message)
    }
})

route.post('/carreras/:id/materia', async (req, res)=>{
    const idCarrera = req.params.id;
    const carrera = await db.Carrera.findByPk(idCarrera)
    if (carrera) {
        const materia = req.body
        const updateCarrera = await db.Materia.create({carreraId:carrera.id, ...materia})
        res.status(201).json(updateCarrera)
    } else {
        res.status(404).json({error: `El id ${idCarrera} no existe.`})
    }
})

route.get('/carreras/:id/materias', async (req, res)=>{
    const id = req.params.id;
    const carrera = await db.Carrera.findOne(
        {
            where: {id},
            include:[
                {
                    model: db.Materia,
                    as: 'materias'
                }
                ]
        });
    res.status(200).json(carrera)
})


module.exports = route