const {Router} = require('express')
const db = require('../db/models')

const route = Router()


route.get('/materias', async (req, res)=>{
    const materias = await db.Materia.findAll({});
    res.status(200).json(materias)
})

route.get('/materias/:id', async (req, res)=>{
    const id = req.params.id
    const materia = await db.Materia.findOne(
        {
            where: {id},
            attributes:['id', 'nombre', 'cuatrimestral', 'anio', 'carreraId']
        })
    if (materia) 
        res.status(200).json(materia)
    else res.status(404).json({error: `el id ${id} no existe`})
})

route.delete('/materias/:id', async (req, res)=>{
    const id = req.params.id
    const row = await db.Materia.destroy({where: {id}})
    if(row) {
     res.status(200).json(`La materia con id ${id} se borro con exito.`)
    } else {
     res.status(404).json(`La materia con id ${id} no existe.`)
    }
})

route.post('/materias/:id/curso', async (req, res)=>{
    const idMateria = req.params.id;
    const materia = await db.Materia.findByPk(idMateria)
    if (materia) {
        const curso = req.body
        const updateMateria = await db.Curso.create({materiaId:materia.id, ...curso})
        res.status(201).json(updateMateria)
    } else {
        res.status(404).json({error: `El id ${idMateria} no existe.`})
    }
})

route.get('/materias/:id/cursos', async (req, res)=>{
    const id = req.params.id;
    const materia = await db.Materia.findOne(
        {
            where: {id},
            include:[
                {
                    model: db.Curso,
                    as: 'cursos'
                }
                ]
        });
    res.status(200).json(materia)
})


module.exports = route