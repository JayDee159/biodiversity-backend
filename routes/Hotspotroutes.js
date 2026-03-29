import express from "express";
import Hotspots from "../models/Hotspot.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Hotspots.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const newData = new Hotspots(req.body);
  const saved = await newData.save();
  res.json(saved);
});

export default router;
