import { Router } from "express";
import { Profile } from "../models/Profile";
import { generateToken } from "../utils/jwt";
import { authMiddleware } from "../middlewares/auth.middlewares";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.post("/create-profile", async (req, res) => {
  try {
    const profile = await Profile.create(req.body);

    const token = generateToken({
      id: profile._id,
      email: profile.email,
    });

    res.status(201).json({ profile, token });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).json({
        error: "Email already exists",
      });
    }

    res.status(400).json({
      error: "Profile creation failed",
    });
  }
});

router.delete(
  "/delete-profile/:id",
  apiKeyMiddleware,
  authMiddleware,
  async (req, res) => {
    try {
      await Profile.findByIdAndDelete(req.params.id);
      res.json({ message: "Profile deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: "Delete failed" });
    }
  }
);

export default router;
