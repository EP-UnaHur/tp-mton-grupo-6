const express = require("express")
const data = require("../data/data.json")
const db = require('./db/models')
const carreraRoute = require('./routes/carrera.route')
const materiaRoute = require('./routes/materia.route')

const _ = require('lodash');
const { where } = require("sequelize");
const app = express();
app.use(express.json())
app.use(carreraRoute)
app.use(materiaRoute)


app.listen(3000, async ()=>{
    console.log('la app esta corriendo en el puerto 3000');
    try {
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true});
     } catch(err){
       console.log(err)
     }
})
