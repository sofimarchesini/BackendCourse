import express from 'express';
import Container from '../Container.js';

const router = express.Router();
const cont = new Container('productos.json')

router.get('/',  (req, res) => {
    console.log("Mostrando productos");
    res.status(200).json(cont.getAll())
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    cont.getById(id) ? res.status(200).json(cont.getById(id)) : res.status(404).json({error: "producto no encontrado"});
})

router.post('/', async (req,res)  => {
    const body = req.body;
    const response = await cont.save(body);
    res.status(200).send( `producto agregado ${response}`);
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

export default router;