import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const getUsers = async (req, res) => {
    console.log('Voy a pasar por: getUsers');
    try {
        console.log('Voy a buscar los usuarios');
        const Users = await User.find();
        console.log('Productos encontrados:', Users); // Consola para depurar los resultados
        if (Users.length === 0) {
            console.log('No se encontraron usuarios');
            return res.status(200).json({ message: 'Users not found' });
        }
        return res.json(Users);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const createUser = async (req, res) => {
    console.log('Voy a pasar por: createUser');
    try {
        console.log('Voy a crear un usuario');
        const userData = new User(req.body);
        const { email } = userData;
        const userFound = await User.findOne({ email });
        if (userFound) {
            console.log('El usuario ya existe');
            return res.status(400).json({ message: `User whit email: ${email} already exists` });
        }
        const savedUser = await userData.save();
        console.log('Usuario creado:', userData); // Consola para depurar los resultados
        return res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};


export const validate = async (req, res) => {
    console.log('Voy a pasar por: validate');
    try {
        console.log('Voy a validar un usuario');
        if (!(req.body.email && req.body.password)) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const userFound = await User.findOne({ email: req.body.email })
        if (!userFound) {
            console.log('El usuario no existe');
            return res.status(400).json({ message: 'User or password is incorrect' });
        }
        console.log('Usuario encontrado:', userFound);
         
        if (bcrypt.compareSync(req.body.password, userFound.password)) {
            console.log('Usuario validado');
            //payload con la informacion del usuario que necesitamos colocar en el token
            const payload = {
                userId: userFound._id,
                userEmail: userFound.email,
                UserRoles: userFound.roles
            }
            
            //const token = jwt.sign(payload, process.env.SECRET_KEY, {
            const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });
            const role = userFound.roles;
            return res.status(200).json({ message: 'Logged in', token, role, user:{id: userFound._id, email: userFound.email}});
        }  else {
            console.log('Usuario no validado');
            return res.status(400).json({ message: 'User or password is incorrect' });
        }
} catch (error) {
    res.status(500).json({ message: "Internal server error", error });
}}
