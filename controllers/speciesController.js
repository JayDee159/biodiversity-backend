import Species from "../models/Species.js";

// GET all species
export const getSpecies = async (req, res) => {
  const data = await Species.find();
  res.json(data);
};

// ADD species
export const addSpecies = async (req, res) => {
  const newSpecies = new Species(req.body);
  const saved = await newSpecies.save();
  res.json(saved);
};

// DELETE species
export const deleteSpecies = async (req, res) => {
  await Species.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};