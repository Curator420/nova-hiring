import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "NHS" // DB name set kar de, chahe change karna ho to env me use kar
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// CORS
const allowedOrigins = [
  "https://novahiringsolutions.com",
  "https://www.novahiringsolutions.com",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
  })
);

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ ok: true }));

// 🔥 Example test route
app.get("/", (req, res) => {
  res.send("Nova Hiring Solutions API is running 🚀");
});

// TODO: yaha pe apne routes import/define kar
// import jobRoutes from './routes/jobRoutes.js'
// app.use('/api/jobs', jobRoutes);

app.listen(PORT, () =>
  console.log(`✅ API listening at http://localhost:${PORT}`)
);
