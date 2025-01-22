import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://userDb:wH7y3Ctytrfd8lp3@cluster0.oimrs.mongodb.net/back?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to the database', error);
        //si falla salimos de esta ejecucion
        process.exit(1);
    }
   
}