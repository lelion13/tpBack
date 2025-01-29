import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const getUsers = async (req, res) => {
    //console.log('Voy a pasar por: getUsers');
    try {
        //console.log('Voy a buscar los usuarios');
        const Users = await User.find();
        //console.log('Productos encontrados:', Users); 
        if (Users.length === 0) {
            //console.log('No se encontraron usuarios');
            return res.status(200).json({ message: 'Users not found' });
        }
        return res.json(Users);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const createUser = async (req, res) => {
    //console.log('Voy a pasar por: createUser');
    try {
        //console.log('Voy a crear un usuario');
        const userData = new User(req.body);
        const { email } = userData;
        const userFound = await User.findOne({ email });
        if (userFound) {
            //console.log('El usuario ya existe');
            return res.status(400).json({ message: `User whit email: ${email} already exists` });
        }
        const savedUser = await userData.save();
        //console.log('Usuario creado:', userData); // Consola para depurar los resultados
        return res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
export const updateUser = async (req, res) => {
    //console.log('Voy a pasar por: editUser');
    try {
        const { id } = req.params;
        //console.log(`Voy a editar el usuario con ID: ${id}`);

        // Si la solicitud incluye una nueva contraseña, la encripta
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedUser) {
            console.log('Usuario no encontrado');
            return res.status(404).json({ message: 'User not found' });
        }

        //console.log('Usuario actualizado:', updatedUser);
        return res.json(updatedUser);
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        return res.status(500).json({ message: "Internal server error", error });
    }
};

export const deleteUser = async (req, res) => {
    //console.log('Voy a pasar por: deleteUser');
    try {
        const { id } = req.params;
        //console.log(`Voy a eliminar el usuario con ID: ${id}`);
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            console.log('Usuario no encontrado');
            return res.status(404).json({ message: 'User not found' });
        }
        //console.log('Usuario eliminado:', deletedUser);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        //console.error('Error al eliminar usuario:', error);
        return res.status(500).json({ message: "Internal server error", error });
    }
};


export const validate = async (req, res) => {
    //console.log('Voy a pasar por: validate');
    try {
        //console.log('Voy a validar un usuario');
        if (!(req.body.email && req.body.password)) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const userFound = await User.findOne({ email: req.body.email })
        if (!userFound) {
            console.log('El usuario no existe');
            return res.status(400).json({ message: 'User or password is incorrect' });
        }
        //console.log('Usuario encontrado:', userFound);
         
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
            //console.log('Usuario no validado');
            return res.status(400).json({ message: 'User or password is incorrect' });
        }
} catch (error) {
    res.status(500).json({ message: "Internal server error", error });
}}
