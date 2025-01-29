import { Router } from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../Controllers/categoryController.js";

const categoryRoute = Router();

categoryRoute.get("/get", getCategories);
categoryRoute.post("/create", createCategory);
//validar en casa... 
categoryRoute.put("/update/:id", updateCategory); // Ruta para actualizar categoría
categoryRoute.delete("/delete/:id", deleteCategory); // Ruta para eliminar categoría

export default categoryRoute;