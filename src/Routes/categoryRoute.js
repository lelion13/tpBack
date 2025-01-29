import { Router } from "express";
import { createCategory, getCategories } from "../Controllers/categoryController.js";

const categoryRoute = Router();

categoryRoute.get("/get", getCategories);
categoryRoute.post("/create", createCategory);

export default categoryRoute;