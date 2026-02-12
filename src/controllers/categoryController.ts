import { Request, Response } from "express";
import { createCategory, getCategories, getCategoryById } from "../services/categoryService";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: "Error al crear categoría", error });
  }
};

const getCategoriesController = async (_req: Request, res: Response) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categorías", error });
  }
};

const getCategoryByIdController = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryById(req.params.id as string);
    if (!category) return res.status(404).json({ message: "Categoría no encontrada" });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categoría", error });
  }
};

export { createCategoryController, getCategoriesController, getCategoryByIdController };
