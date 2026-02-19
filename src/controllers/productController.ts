import { Request, Response } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../services/productService";
import { productValidate, productPartialValidate } from "../validators/productValidator";

const createProductController = async (req: Request, res: Response) => {
  try {
    const result = productValidate.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ success: false, errors: result.error.issues });
    }

    const product = await createProduct(result.data);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "Error al crear producto", error });
  }
};

const getProductsController = async (_req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id as string);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener producto", error });
  }
};

const updateProductController = async (req: Request, res: Response) => {
  try {
    const result = productPartialValidate.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ success: false, errors: result.error.issues });
    }

    const product = await updateProduct(req.params.id as string, result.data);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar producto", error });
  }
};

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const product = await deleteProduct(req.params.id as string);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar producto", error });
  }
};

export {
  createProductController,
  getProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController
};