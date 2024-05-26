const express = require("express");

const app = express();

app.get('/cursos', (req, res)=>{
    res.status(200).json({
        message: 'hola'
    })
})

app.listen(3000, ()=>{
    console.log('la app esta corriendo en el puerto 3000')
})