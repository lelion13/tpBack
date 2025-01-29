import { Router } from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../Controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = Router();

categoryRoute.get("/get", getCategories);
categoryRoute.post("/create", verifyTokenMiddleware, createCategory);
categoryRoute.put("/update/:id", verifyTokenMiddleware, updateCategory);
categoryRoute.delete("/delete/:id", verifyTokenMiddleware, deleteCategory);

export default categoryRoute;