import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

// Use the MongoDB URI from .env
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const Like = mongoose.model("Like", {
  count: Number,
  timestamp: { type: Date, default: Date.now },
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/likes", async (req, res) => {
  try {
    const likeDoc = (await Like.findOne()) || (await Like.create({ count: 0 }));
    res.json({ likes: likeDoc.count });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch likes" });
  }
});

app.post("/api/likes", async (req, res) => {
  try {
    const likeDoc = (await Like.findOne()) || (await Like.create({ count: 0 }));
    likeDoc.count += 1;
    await likeDoc.save();
    res.json({ likes: likeDoc.count });
  } catch (error) {
    res.status(500).json({ error: "Failed to update likes" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
