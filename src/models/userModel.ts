import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, default: "Nuevo usuario" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ["user", "admin"], default: "user" }
}, {
  versionKey: false,
  timestamps: true
});

const User = mongoose.model("User", UserSchema);

export { User };
