import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export const connectdb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to the database', error);
        //si falla salimos de esta ejecucion
        process.exit(1);
    }
   
}