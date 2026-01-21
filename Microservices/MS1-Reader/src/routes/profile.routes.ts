import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/get-profile/:id", async (req, res) => {
    try {
        const response = await axios.get(
            `${process.env.MS2_URL}/get-profile/${req.params.id}`,
            {
                headers: {
                    "x-api-key": process.env.API_KEY,
                    "x-api-secret": process.env.API_SECRET
                }
            }
        );

        res.json(response.data);
    } catch (error: any) {
        const status = error.response?.status || 404;
        const message = error.response?.data?.error || "Profile not found";
        res.status(status).json({ error: message });
    }
});

export default router;