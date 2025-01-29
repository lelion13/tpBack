import {Router} from 'express';
import { getProducts, createProduct, editProduct } from '../Controllers/productController.js';
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js';

//Inicializamos el router
const productRoute = Router();


//generar las rutas
productRoute.get('/get',verifyTokenMiddleware, getProducts);
productRoute.post('/create', createProduct);
productRoute.put('/edit/:id', editProduct);
// Eliminar un producto por ID
productRoute.delete("/delete/:id", deleteProduct);

export default productRoute;