import mongoose from "mongoose";

const hotspotSchema = new mongoose.Schema({
  name: String,
  severity: String,
  location: {
    lat: Number,
    lng: Number
  }
});

export default mongoose.model("Hotspot", hotspotSchema);
