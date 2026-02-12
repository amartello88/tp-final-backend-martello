import { Router } from "express";
import {
  registerUserController,
  loginUserController,
  getUsersController
} from "../controllers/userController";

const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/", getUsersController);

export { userRouter };
