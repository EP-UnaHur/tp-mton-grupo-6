const express = require("express")
const _ = require('lodash')
const data = require("../data/data.json")

const app = express();
app.use(express.json())

app.get('/carreras', (req, res)=>{
    res.status(200).json(data)
})

app.get('/carreras/:id', (req, res)=>{
    const id = req.params.id
    const carrera = data.find(e => e.id == id)
    if (carrera) 
        res.status(200).json(carrera)
    else res.status(404).json({error: 'el id no existe'})
})

app.delete('/carreras/:id', (req, res)=>{
    const id = req.params.id;
    const idx = data.findIndex(e => e.id == id)
    if (idx >= 0) {
    const removed = data.splice(idx, 1)
    res.status(202).json({
        mensaje: 'la carrera fue eliminada con exito',
        carrera: removed
    })
    } else res.status(404).json({error: 'el id no existe'})
})

app.post('/carreras', (req, res)=>{
    const carrera = req.body
    let id = 0
    if (data.length) 
        id = _.max(data.map(e=>e.id))
    const aGrabar = {id: id + 1, ...carrera}
    data.push(aGrabar)
    res.status(201).json(aGrabar)
})

app.put('/carreras/:id', (req, res)=>{
    const id = req.params.id;
    const idx = data.findIndex(e => e.id == id)
    if (idx >= 0) {
        data[idx] = {id: Number(id), ...req.body}
        res.status(200).json(data[idx])
    } else
        res.status(404).json({error: 'el id no existe'})
})

app.listen(3000, ()=>{
    console.log('la app esta corriendo en el puerto 3000')
})