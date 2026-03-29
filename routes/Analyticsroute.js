import express from "express";
import Analytics from "../models/Analytics.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Analytics.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const newData = new Analytics(req.body);
  const saved = await newData.save();
  res.json(saved);
});

export default router;
