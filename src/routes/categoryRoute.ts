import { Router } from "express";
import {
  createCategoryController,
  getCategoriesController,
  getCategoryByIdController
} from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.post("/", createCategoryController);
categoryRouter.get("/", getCategoriesController);
categoryRouter.get("/:id", getCategoryByIdController);

export { categoryRouter };
