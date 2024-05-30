const {Carrera} = require('../db/models')
const {Materia} = require('../db/models')

const controller = {}

const getAllCarreras = async (req, res) => {
    res.status(200).json(await Carrera.findAll({}))
}

controller.getAllCarreras = getAllCarreras

const carreraById = async (req, res)=>{
    const id = req.params.id
    res.status(200).json(await Carrera.findByPk(id))
}

controller.carreraById = carreraById

const crearCarrera = async (req, res)=>{
    const carrera = await Carrera.create(req.body)
    res.status(201).json(carrera)
    
}

controller.crearCarrera = crearCarrera

const crearMateria = async (req, res)=>{
    const idCarrera = req.params.id
    const carrera = await Carrera.findByPk(idCarrera)
    const updateCarrera = await Materia.create({carreraId:carrera.id, ...req.body})
    res.status(201).json(updateCarrera)
}

controller.crearMateria = crearMateria

const verMateriasDeCarrera = async (req, res)=>{
    const id = req.params.id;
    const carrera = await Carrera.findOne(
        {
            where: {id},
            include:[
                {
                    model: Materia,
                    as: 'materias'
                }
                ]
        });
    res.status(200).json(carrera)
}

controller.verMateriasDeCarrera = verMateriasDeCarrera

module.exports = controller