import mongoose from "mongoose"

// contrato 
// como defina un producto es como lo voy a manipular
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0, default: 0 },
  stock: { type: Number, min: 0, default: 0 },
  description: { type: String, default: "Sin descripción" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
}, {
  versionKey: false,
  timestamps: true
});


const Product = mongoose.model("Product", ProductSchema)

export { Product }