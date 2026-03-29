import mongoose from "mongoose";

const speciesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  population: Number,
  habitat: String,
  location: String,
}, { timestamps: true });

export default mongoose.model("Species", speciesSchema);