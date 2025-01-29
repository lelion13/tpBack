import Category from '../models/categoryModel.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if(categories.length === 0) {
            return res.status(204);
        }
        return res.status(200).json(categories);
    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
};

export const createCategory = async (req, res) => {
    try {
        const {name} = req.body;
        const categoryExist = await Category.findOne({name});
        if (categoryExist){
            return res.status(400).json({message: "Category already exists"});
        }
        const newCategory = new Category(req.body)
        const response = await newCategory.save()
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//validar que funcionan update y delete
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json(updatedCategory);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// ELIMINAR CATEGORÍA
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};