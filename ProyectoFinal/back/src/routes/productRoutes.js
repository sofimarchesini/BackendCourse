import express from 'express';

const router = express.Router();

import {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    addProductToCart
} from '../Controllers/ProductController.js';


router.get('/', getProducts);

router.get(':id', getProduct);

router.post(':id', addProductToCart)

router.post('/create', createProduct);

router.put('/update/:id',updateProduct );

router.delete('/delete/:id', deleteProduct);
  
export default router;