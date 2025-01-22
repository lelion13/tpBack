import {Router} from 'express';
import { getProducts, createProduct } from '../Controllers/productController.js';

//Inicializamos el router
const productRoute = Router();


//generar las rutas
productRoute.get('/get', getProducts);
productRoute.post('/create', createProduct);


export default productRoute;