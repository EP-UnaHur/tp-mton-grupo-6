const express = require("express")
const data = require("../data/data.json")
const db = require('./db/models')

const _ = require('lodash');
const { where } = require("sequelize");
const app = express();
app.use(express.json())

app.get('/carreras', async (req, res)=>{
    const carreras = await db.Carrera.findAll({});
    res.status(200).json(carreras)
})

app.get('/carreras/:id', async (req, res)=>{
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

app.post('/carreras', async (req, res)=>{
    try {
        const carrera = req.body
        const newCarrera = await db.Carrera.create(carrera)
        res.status(201).json(newCarrera)
    } catch (err) {    
        res.status(400).json(err.message)
    }
})

app.post('/carreras/:id/materia', async (req, res)=>{
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

app.get('/carreras/:id/materias', async (req, res)=>{
    const id = req.params.id;
    const carrera = await db.Carrera.findOne(
        {
            where: {id},
            attributes:['id', 'nombre', 'grado', 'universidad']
        })
    const materias = await db.Materia.findAll({
        where: {carreraId:id},
        attributes:['id', 'nombre', 'cuatrimestral', 'anio']
    });
    res.status(200).json({carrera, materias})
})

app.get('/materias', async (req, res)=>{
    const materias = await db.Materia.findAll({});
    res.status(200).json(materias)
})

app.listen(3000, async ()=>{
    console.log('la app esta corriendo en el puerto 3000');
    try {
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true});
     } catch(err){
       console.log(err)
     }
})
