import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

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

app.use("/", (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});