import express from 'express';
import Container from '../Container.js';

const router = express.Router();
const cont = new Container('productos.json')

router.get('/productos',  (req, res) => {
    console.log("Mostrando productos");
    const productos = cont.getAll();
    res.render('./partials/listProducts', {productos});
})

router.post('/productos', async (req,res)  => {
    const body = req.body;
    cont.save(body);
    res.redirect('/productos');
})

/*
router.get('/:id', (req, res) => {
    const {id} = req.params;
    cont.getById(id) ? res.status(200).json(cont.getById(id)) : res.status(404).json({error: "producto no encontrado"});
})


router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {prod} = req;
    cont.updateById(id,prod) ? res.status(200).send("producto actualizado") : res.status(404).send("El id es incorrecto");
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    cont.deleteById(id) ? res.status(200).send("producto borrado") : res.status(404).send("El id es incorrecto");
})
*/
export default router;