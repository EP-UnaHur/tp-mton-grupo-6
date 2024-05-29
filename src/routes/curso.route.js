const {Router} = require('express')
const db = require('../db/models');
const { where } = require('sequelize');

const route = Router()

route.get('/cursos', async (req, res)=>{
    const cursos = await db.Curso.findAll({});
    res.status(200).json(cursos)
})

route.get('/cursos/:id', async (req, res)=>{
    const id = req.params.id
    const curso = await db.Curso.findOne(
        {
            where: {id},
            attributes:['id', 'comision', 'turno', 'fechaInicio', 'fechaFin', 'materiaId']
        })
    if (curso) 
        res.status(200).json(curso)
    else res.status(404).json({error: `el id ${id} no existe`})
})

route.delete('/cursos/:id', async (req, res)=>{
    const id = req.params.id
    const row = await db.Curso.destroy({where: {id}})
    if(row) {
     res.status(200).json(`El curso con id ${id} se borro con exito.`)
    } else {
     res.status(404).json(`El curso con id ${id} no existe.`)
    }
})

route.put('/cursos/:id', async (req, res)=>{
    const idCurso = req.params.id;
    const newCurso = db.Curso.update(
        req.body,
        {
            where: {id: idCurso}
        }
    )
    if (newCurso) {
        res.status(200).json(`El curso con id ${idCurso} se modifico con exito.`)
    } else {
        res.status(404).json({error: `El id ${idCurso} no existe.`})
    }
})


module.exports = route