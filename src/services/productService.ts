import { Product } from "../models/productModel";

// Crear producto
const createProduct = async (data: any) => {
  const product = new Product(data);
  await product.save();
  return await product.populate("category");
};

// Listar todos los productos
const getProducts = async () => {
  return await Product.find().populate("category");
};

// Buscar producto por ID
const getProductById = async (id: string) => {
  return await Product.findById(id).populate("category");
};

// Actualizar producto
const updateProduct = async (id: string, data: any) => {
  return await Product.findByIdAndUpdate(id, data, { new: true }).populate("category");
};

// Eliminar producto
const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};