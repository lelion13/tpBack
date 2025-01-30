import {Router} from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../Controllers/productController.js';
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js';
import { verifyMerchantMiddleware } from '../middlewares/verifyMerchantMiddleware.js';

//Inicializamos el router
const productRoute = Router();


//generar las rutas
productRoute.get('/get', getProducts);
productRoute.post('/create', verifyTokenMiddleware, verifyMerchantMiddleware, createProduct);
productRoute.put('/update/:id', verifyTokenMiddleware, verifyMerchantMiddleware, updateProduct);
productRoute.delete("/delete/:id", verifyTokenMiddleware, verifyMerchantMiddleware, deleteProduct);

export default productRoute;