const {Router} = require('express')
const db = require('../db/models');
const { includes } = require('lodash');

const route = Router()

route.post('/cursos/:id/profesores', async (req, res)=>{
    const idCurso = req.params.id;
    const curso = await db.Curso.findOne({where: {id: idCurso}})
    const cont = req.body
    const profesoresIds = cont.map(profesor => profesor.id);
    const profesores = await Profesor.findAll({
        where: {
            id: profesoresIds
        }
    });
    
    await curso.addProfesors(profesores)

    if (curso)
        res.status(200).json(curso)
    else
        res.status(404).json(`El curso con id ${idCurso} no existe.`)
})

route.get('/cursos/:id/profesores', async (req, res)=>{
    const idCurso = req.params.id;
    const curso = await db.Curso.findOne(
        {
            where: {id: idCurso},
            include:[
                {
                    model: db.Profesor,
                    as: 'profesores'
                }
                ]
        });
    res.status(200).json(curso)
})


module.exports = route