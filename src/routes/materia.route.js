const {Router} = require('express')
const db = require('../db/models')

const route = Router()

route.get('/materias', async (req, res)=>{
    const materias = await db.Materia.findAll({});
    res.status(200).json(materias)
})


module.exports = route