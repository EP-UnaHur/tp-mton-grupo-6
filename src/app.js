const express = require("express")
const data = require("../data/data.json")
const db = require('./db/models')
const carreraRoute = require('./routes/carrera.route')
const materiaRoute = require('./routes/materia.route')
const cursoRoute = require('./routes/curso.route')
const profesorRoute = require('./routes/profesor.route')
//const cursoProfesor = require('./routes/cursoProfesor.route')


const app = express();
app.use(express.json())
app.use(carreraRoute)
app.use(materiaRoute)
app.use(cursoRoute)
app.use(profesorRoute)
//app.use(cursoProfesor)


const PORT = process.env.PORT || 3000;

app.listen(PORT, async ()=>{
    console.log(`la app esta corriendo en el puerto ${PORT}`);
    try {
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true});
     } catch(err){
       console.log(err)
     }
})
