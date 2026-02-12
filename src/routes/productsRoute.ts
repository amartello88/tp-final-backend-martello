import { Router } from "express";
import {
  createProductController,
  getProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController
} from "../controllers/productController";

const productRouter = Router();

// GET - http://localhost:50000/products/
productRouter.get("/", getProductsController);
productRouter.post("/", createProductController);
productRouter.get("/:id", getProductByIdController);
productRouter.patch("/:id", updateProductController);
productRouter.delete("/:id", deleteProductController);

export { productRouter };
