import { Product } from "../models/productModel";

// Crear producto
const createProduct = async (data: any) => {
  const product = new Product(data);
  await product.save();
  return await product.populate("category");
};

// Listar todos los productos
const getProducts = async (filters?: {
  minPrice?: number;
  maxPrice?: number;
  name?: string;
}) => {
  const query: any = {};

  if (filters?.minPrice !== undefined) query.price = { ...query.price, $gte: filters.minPrice };
  if (filters?.maxPrice !== undefined) query.price = { ...query.price, $lte: filters.maxPrice };
  if (filters?.name) query.name = { $regex: filters.name, $options: "i" };

  return await Product.find(query).populate("category");
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