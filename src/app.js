const express = require("express")
const data = require("../data/data.json")
const db = require('./db/models')
const carreraRoute = require('./routes/carrera.route')
const materiaRoute = require('./routes/materia.route')
const cursoRoute = require('./routes/curso.route')
const profesorRoute = require('./routes/profesor.route')
const cursos_profesorRoute = require('./routes/curso_profesor.route')

const _ = require('lodash');
const app = express();
app.use(express.json())
app.use(carreraRoute)
app.use(materiaRoute)
app.use(cursoRoute)
app.use(profesorRoute)
app.use(cursos_profesorRoute)


app.listen(3000, async ()=>{
    console.log('la app esta corriendo en el puerto 3000');
    try {
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true});
     } catch(err){
       console.log(err)
     }
})
