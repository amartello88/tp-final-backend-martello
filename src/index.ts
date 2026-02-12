import express from "express";
import cors from "cors";
import { connectDb } from "./config/mongodb";
import { productRouter } from "./routes/productsRoute";
import { authRouter } from "./routes/authRouter";
import { authMiddleware } from "./middleware/authMiddleware";
import { IPayload } from "./interfaces/IPayload";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoute";
import { categoryRouter } from "./routes/categoryRoute";

dotenv.config();

const serverHttp = express();

declare global {
  namespace Express {
    interface Request {
      user?: IPayload;
    }
  }
}

// middleware
serverHttp.use(cors());
serverHttp.use(express.json());

// rutas principales
serverHttp.use("/products", authMiddleware, productRouter);
serverHttp.use("/auth", authRouter);
serverHttp.use("/users", authMiddleware, userRouter);
serverHttp.use("/categories", authMiddleware, categoryRouter);

// error 404
serverHttp.use((req, res) => {
  res.status(404).json({ success: false, error: "el recurso no se encuentra" });
});

const PORT = process.env.PORT;

// levantar servidor
serverHttp.listen(PORT, () => {
  try {
    console.log(`✅ Servidor http en escucha en el puerto http://127.0.0.1:${PORT}`);
    connectDb();
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    process.exit(1);
  }
});
