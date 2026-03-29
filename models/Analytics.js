import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  totalSpecies: Number,
  endangered: Number,
  vulnerable: Number,
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Analytics", analyticsSchema);
