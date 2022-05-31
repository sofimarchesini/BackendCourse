import express from 'express';
import Container from '../Components/Container.js';
import multer from 'multer';

const router = express.Router();
const cont = new Container('./src/data/productos.json')

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

//Listo todos los productos
router.get('/',  (req, res) => {
    console.log("Mostrando productos");
    const productos = cont.getAll();
    res.render('index.ejs', {productos});
})

//Me permite listar un producto por su id (disponible para usuarios y administradores)
router.get('/:id', (req, res) => {
    const {id} = req.params;
    cont.getById(id) ? res.json(cont.getById(id)) : res.status(404).json({error: "producto no encontrado"});
})


//Para incorporar productos al listado (disponible para administradores)
router.post('/', isAdminOruser, (req,res)  => {
    const body = req.body;
    console.log(req.body)
    const photo = req.file;
    body.thumbnail =  '/img/'+photo.filename;
    cont.save(body);
    res.redirect('/productos');
})

//Actualiza un producto por su id (disponible para administradores)
router.put('/:id', isAdminOruser, (req, res) => {
    const {id} = req.params;
    const {prod} = req;
    cont.updateById(id,prod) ? res.status(200).send("producto actualizado") : res.status(404).send("El id es incorrecto");
})

//Borra un producto por su id (disponible para administradores)
router.delete('/:id', isAdminOruser, (req, res) => {
    const {id} = req.params;
    cont.deleteById(id) ? res.status(200).send("producto borrado") : res.status(404).send("El id es incorrecto");
})


export default router;