import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
    console.log('Voy a pasar por: getProducts');
    try {
        console.log('Voy a buscar los productos');
        const Products = await Product.find();
        console.log('Productos encontrados:', Products); // Consola para depurar los resultados
        if (Products.length === 0) {
            console.log('No se encontraron productos');
            return res.status(200).json({ message: 'Products not found' });
        }
        return res.json(Products);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const createProduct = async (req, res) => {
    console.log('Voy a pasar por: createProduct');
    try {
        console.log('Voy a crear un producto');
        const productData = new Product(req.body);
        const { name } = productData;
        const productExists = await Product.findOne({ name });
        if (productExists) {
            console.log('El producto ya existe');
            return res.status(400).json({ message: `Product ${name} already exists` });
        }
        const savedProduct = await productData.save();
        console.log('Producto creado:', productData); // Consola para depurar los resultados
        return res.status(201).json(productData);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};