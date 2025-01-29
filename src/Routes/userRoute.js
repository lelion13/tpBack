import {Router} from 'express';
import { createUser, deleteUser, editUser, getUsers, validate } from '../Controllers/userController.js';

//Inicializamos el router
const userRoute = Router();


//generar las rutas
userRoute.get('/get', getUsers);
userRoute.post('/create', createUser);
userRoute.post('/login', validate);

//validar en casa...
// Editar un usuario por ID
userRoute.put("/edit/:id", editUser);
// Eliminar un usuario por ID
userRoute.delete("/delete/:id", deleteUser);


export default userRoute;