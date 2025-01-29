import {Router} from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../Controllers/productController.js';
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js';

//Inicializamos el router
const productRoute = Router();


//generar las rutas
productRoute.get('/get', getProducts);
productRoute.post('/create', verifyTokenMiddleware, createProduct);
productRoute.put('/update/:id', verifyTokenMiddleware, updateProduct);
productRoute.delete("/delete/:id", verifyTokenMiddleware, deleteProduct);

export default productRoute;