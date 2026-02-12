import { User } from "../models/userModel";
import bcrypt from "bcryptjs";

// Registrar usuario
const registerUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({ ...data, password: hashedPassword });
  return await user.save();
};

// Buscar usuario por email
const findUserByEmail = async (email: string) => {
  return await User.findOne({ email }).select("+password");
};

// Listar usuarios
const getUsers = async () => {
  return await User.find();
};

export { registerUser, findUserByEmail, getUsers };
