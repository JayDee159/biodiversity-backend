import express from "express";
import { getSpecies, addSpecies, deleteSpecies } from "../controllers/speciesController.js";

const router = express.Router();

router.get("/", getSpecies);
router.post("/", addSpecies);
router.delete("/:id", deleteSpecies);

export default router;