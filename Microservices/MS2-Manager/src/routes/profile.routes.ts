import { Router } from "express";
import { Profile } from "../models/Profile";

const router = Router();

router.post("/create-profile", async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: "Profile creation failed"});
    }
});

export default router;