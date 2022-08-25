import ContainerDB from '../Persistencia/contenedores/containerDB.js';
import express from 'express';
import multer from 'multer';
import {options} from '../config/configDB.js';
//PARARSE EN BACK Y CORRER CON NPM START 

const contDB = new  ContainerDB('prods',options.mariaDB)
const router = express.Router();

var isAdmin = true;

function isAdminOruser(req,res,next){
    if(!isAdmin) res.send("No tienes acceso")
    else next()
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/img');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
})

const limits = { fieldSize: 10 * 1024 * 1024 };  
router.use(multer({storage},{limits} ).single('thumbnail'));


router.get('/productos-test',  (req, res) => {
    console.log("Mostrando productos");
    const productos = contDB.aleatoryProducts(5);
    res.render('index.ejs', {productos});
})


//Listo todos los productos
router.get('/',  (req, res) => {
    console.log("Mostrando productos");
    const productos = contDB.getAll();
    res.render('index.ejs', {productos});
})

//Me permite listar un producto por su id (disponible para usuarios y administradores)
router.get('/:id', (req, res) => {
    const {id} = req.params;
    contDB.getById(id) ? res.json(contDB.getById(id)) : res.status(404).json({error: "producto no encontrado"});
})


//Para incorporar productos al listado (disponible para administradores)
router.post('/', isAdminOruser, (req,res)  => {
    const body = req.body;
    const photo = req.file;
    body.thumbnail =  '/img/'+photo.filename;
    contDB.save(body);
    res.redirect('/productos');
})

//Borra un producto por su id (disponible para administradores)
router.delete('/:id', isAdminOruser, (req, res) => {
    const {id} = req.params;
    contDB.deleteById(id) ? res.status(200).send("producto borrado") : res.status(404).send("El id es incorrecto");
})


export default router;