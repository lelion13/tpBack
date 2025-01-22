import mongoose from "mongoose";


const statusEnum = ['AVAILABLE', 'NOT ABAILABLE', 'DISCONTINUED'];
//creamos el esquema de la base de datos para los productos
const ProductSchema = new mongoose.Schema({
//escribimos los campos que tendra la base de datos
name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    trim: true,
    lowercase: true,
    minlegth: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name must be at most 50 characters long']
},
status: {
    type: String,
    validate: {
        validator: function (status) {
            return statusEnum.includes(status);
        },
        message: (props) => `${props.value} is not a valid status`
    },
    required: [true, 'Status is required'],
    enum: statusEnum, //validador nativo de mongoose
},
createdAt: {
    type: Date,
    default: Date.now()
},
price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number']
},
image: {
    type: String,
    default: "https://picsum.photos/400"
}
})

export default mongoose.model('Product', ProductSchema);
