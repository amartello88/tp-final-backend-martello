import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "Sin descripción" }
}, {
  versionKey: false,
  timestamps: true
});

const Category = mongoose.model("Category", CategorySchema);

export { Category };
