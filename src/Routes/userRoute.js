import {Router} from 'express';
import { createUser, deleteUser, updateUser, getUsers, validate } from '../Controllers/userController.js';
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js';
import { verifyAdminMiddleware } from '../middlewares/verifyAdminMiddleware.js';

//Inicializamos el router
const userRoute = Router();


//generar las rutas
userRoute.get('/get', getUsers);
userRoute.post('/create', verifyTokenMiddleware, verifyAdminMiddleware, createUser);
userRoute.post('/login', validate);
userRoute.put("/update/:id", verifyTokenMiddleware, verifyAdminMiddleware, updateUser);
userRoute.delete("/delete/:id", verifyTokenMiddleware, verifyAdminMiddleware, deleteUser);

export default userRoute;