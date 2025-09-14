import express from "express";
import {
  login,
  register,
  logout,
  getUser,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

/**
 * @route   POST /api/v1/users/register
 * @desc    Register a new user
 * @access  Public
 */
router.post("/api/v1/register", register);

/**
 * @route   POST /api/v1/users/login
 * @desc    Login user
 * @access  Public
 */
router.post("/api/v1/login", login);

/**
 * @route   GET /api/v1/users/logout
 * @desc    Logout user (clears cookie/token)
 * @access  Private
 */
router.get("/api/v1/logout", isAuthenticated, logout);

/**
 * @route   GET /api/v1/users/me
 * @desc    Get logged-in user details
 * @access  Private
 */
router.get("/api/v1/me", isAuthenticated, getUser);

export default router;
