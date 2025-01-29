import mongoose from "mongoose";
import bcrypt from "bcrypt";


const rolesEnum = ['ADMIN', 'MERCHANT', 'CUSTOMER'];
//creamos el esquema de la base de datos para los productos
const UserSchema = new mongoose.Schema({
//escribimos los campos que tendra la base de datos
name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    lowercase: true,
    minlegth: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name must be at most 50 characters long']
},
image: {
    type: String,
    default: "https://picsum.photos/400"
},
password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minlegth: [8, 'Password must be at least 8 characters long']
},
email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    minlegth: [3, 'Email must be at least 3 characters long'],
    maxlength: [50, 'Email must be at most 50 characters long']
},
roles: {
    type: String,
    validate: {
        validator: function (role) {
            return rolesEnum.includes(role);
        },
        message: (props) => `${props.value} is not a valid role`
    },
    enum: rolesEnum, //validador nativo de mongoose
    required: [true, 'Role is required']
},
})
//encriptamos la contraseña antes de guardarla en la base de datos
UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

export default mongoose.model('User', UserSchema);
