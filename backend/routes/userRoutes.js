import express from "express";
import { login, register, logout, getUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// ✅ Register (no auth required)
router.post("/register", register);

// ✅ Login (no auth required)
router.post("/login", login);

// ✅ Logout (auth required)
router.get("/logout", isAuthenticated, logout);

// ✅ Get user details (auth required)
router.get("/me", isAuthenticated, getUser);

export default router;
