import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import applicationRoutes from "./routes/applicationRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// CORS
app.use(
  cors({
    origin: [
      "https://novahiringsolutions.com",
      "https://www.novahiringsolutions.com",
      "http://localhost:5173"
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());


// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB connect
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Health check route
app.get("/healthz", (req, res) => res.json({ ok: true }));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Nova Hiring API is running");
});

app.use("/applications", applicationRoutes);
app.use("/jobs", jobRoutes);
app.use("/users", userRoutes);

// Start server
app.listen(PORT, () => console.log(`🚀 Nova Hiring API running on port ${PORT}`));
