import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoute from './src/Routes/productRoute.js';
import { connectdb } from './src/db.js';
import userRoute from './src/Routes/userRoute.js';
import { PORT } from './src/config.js';
import categoryRoute from './src/Routes/categoryRoute.js';

//ejecucion de express para inicializar el servidor
const app = express();

//Middlewares
//permitir las conexiones cors
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

//parsea a json las solicitudes
app.use(bodyParser.json());
//parsea body con urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute)

//conectar a la base de datos
connectdb();

app.listen(PORT, () => {
    console.log('Server running on port 3000');
});