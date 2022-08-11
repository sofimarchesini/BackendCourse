import express from 'express';
import Carts from '../Components/carts.js';
import multer from 'multer';
import Container from '../Components/Container.js';

const cont = new Container('./src/data/productos.json')
const router = express.Router();
const carts = new Carts('./src/data/carts.json')

/** 
POST: '/' - Crea un carrito y devuelve su id.
DELETE: '/:id' - Vacía un carrito y lo elimina.
GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
*/

var isAdmin = true;

function isAdminOruser(req,res,next){
    if(!isAdmin) res.send("No tienes acceso")
    else next()
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
})

const limits = { fieldSize: 10 * 1024 * 1024 };  
router.use(multer({storage},{limits} ).single('thumbnail'));

// COMO NO ESPECIFICA CUAL DE LAS RUTAS ES PARA ADMINS O CUAL ES PARA USUARIOS, DEDUJE YO QUE ME PARECIA LO CORRECTO
// QUIERO ACLARAR QUE NO TERMINE DE ENTENDER PORQUE TENIA QUE HABER MAS DE UN CARRITO Y ME CONFUNDIO PORQUE CUANDO UNO ENTRA A LA WEB
// HAY UN SOLO CARRITO. POR CADA USUARIO QUE ENTRA HAY UNO SOLO Y SE GUARDA EN LOCAL STORAGE LO QUE VA AGREGANDO. 

// Me mostrara los productos de un carrito cualquiera
router.get('/',  (req, res) => {
    console.log("Mostrando Cart");
    const productos = carts.getAll(0)
    res.render('partials/cart/index.ejs', {productos});
})

//Para incorporar productos al carrito por su id de producto
//agregue a la ruta el id de carrito para saber que carrito es
router.post('/:idCart/:idProd/productos',  (req,res)  => {
    const {idCart, idProd} = req.params;
    const prod = cont.getAll().find(obj => obj.id === parseInt(idProd) || null);
    carts.addProduct(parseInt(idCart), prod);
})

// creo un nuevo carrito y me redirecta al nuevo carrito , que en un inicio estara vacio de productos
router.post('/', isAdminOruser,  (req,res)  => {
    var cart = {}
    var newCartWithId = carts.createAndReturnId(cart);
    const productos = carts.getAll(newCartWithId.id)
    res.render('partials/cart/index.ejs', {productos});
})

//Me va a mostrar los productos del carrito que yo le pase
router.get('/:idCart/productos', (req, res) => {
    const {idCart} = req.params;
    const productos = carts.getAll(parseInt(idCart))
    if ( productos ) res.render('partials/cart/index.ejs', {productos})
    else res.send("No existe tu carrito")
})

// Elimina todo el carrito que yo le paso
router.delete('/:idCart', (req, res) => {
    const {idCart} = req.params;
    var cart = carts.deleteCart(parseInt(idCart));
    cart ? res.send("Carrito Eliminado") : res.send("No existia el carrito que quieres eliminar")
})

//Elimina de un carrito especifico un producto especifico
router.delete('/:idCart/productos/:id_prod', (req, res) => {
    const {idCart, id_prod} = req.params;
    if (carts.deleteById(parseInt(idCart),parseInt(id_prod))) res.send("Producto eliminado")
    else res.send("no existia el carrito o el producto que quieres eliminar")
})


export default router;