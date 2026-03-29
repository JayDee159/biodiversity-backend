import express from "express";
import Hotspot from "../models/Hotspot.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Hotspot.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const newData = new Hotspot(req.body);
  const saved = await newData.save();
  res.json(saved);
});

export default router;
