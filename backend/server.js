import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "https://novahiringsolutions.com",
      "https://www.novahiringsolutions.com",
      "http://localhost:5173" // keep for local dev
    ],
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connect
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Health check
app.get("/health", (req, res) => res.json({ ok: true }));

// Example route
app.get("/", (req, res) => {
  res.send("Nova Hiring API running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API listening on port ${PORT}`);
});
