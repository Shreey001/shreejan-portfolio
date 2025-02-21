import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Updated CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite dev server
      "http://localhost:4173", // Vite preview
      "https://your-frontend-domain.vercel.app", // Your deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Like Schema & Model
const likeSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const Like = mongoose.model("Like", likeSchema);

// API Routes
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API Working ✨" });
});

// Get likes
app.get("/api/likes", async (req, res) => {
  try {
    let like = await Like.findOne();
    if (!like) {
      like = await Like.create({ count: 0 });
    }
    res.json({ likes: like.count });
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update likes
app.post("/api/likes", async (req, res) => {
  try {
    let like = await Like.findOne();
    if (!like) {
      like = await Like.create({ count: 1 });
    } else {
      like.count += 1;
      await like.save();
    }
    res.json({ likes: like.count });
  } catch (error) {
    console.error("Error updating likes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

// Start server if not in Vercel environment
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on port ${port} 🚀`);
  });
}

// For Vercel deployment
export default app;
