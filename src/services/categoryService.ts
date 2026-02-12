import { Category } from "../models/categoryModel";

// Crear categoría
const createCategory = async (data: any) => {
  const category = new Category(data);
  return await category.save();
};

// Listar categorías
const getCategories = async () => {
  return await Category.find();
};

// Buscar categoría por ID
const getCategoryById = async (id: string) => {
  return await Category.findById(id);
};

export { createCategory, getCategories, getCategoryById };
