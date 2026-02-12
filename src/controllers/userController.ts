import { Request, Response } from "express";
import { registerUser, findUserByEmail, getUsers } from "../services/userService";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { IPayload } from "../interfaces/IPayload";
import dotenv from "dotenv";
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET no está definido en .env");
}

const registerUserController = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ success: false, error: err.message });
  }
};

const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Ingresá email y contraseña" });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ success: false, error: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Credenciales inválidas" });
    }

    // Payload tipado con la interfaz
    const payload: IPayload = {
      _id: user._id,
      username: user.username,
      email: user.email
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, data: token });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ success: false, error: err.message });
  }
};

const getUsersController = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json({ success: true, data: users });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ success: false, error: err.message });
  }
};

export { registerUserController, loginUserController, getUsersController };