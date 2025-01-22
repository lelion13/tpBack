import mongoose from "mongoose";

const statusEnum = ['AVAILABLE', 'NOT ABAILABLE', 'DISCONTINUED'];
//creamos el esquema de la base de datos para los productos
const productSchema = new mongoose.Schema({
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
}
})

export default mongoose.model('Product', productSchema);
//https://d1lb3lf90ja1l2.cloudfront.net/82807996496/82807996496-meeting-2972ac8f-37ec-4038-bcfe-928ad5c6c29f.mp4

//1:02: