import { Router } from "express"
import { loginUserController, registerUserController } from "../controllers/userController"

const authRouter = Router()

authRouter.post("/register", registerUserController)
authRouter.post("/login", loginUserController)

export { authRouter }