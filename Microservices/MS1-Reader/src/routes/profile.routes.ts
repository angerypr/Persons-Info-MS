import https from "https";
import { Router } from "express";
import axios from "axios";
import { basicAuthMiddleware } from "../middlewares/basicAuth.middleware";

const router = Router();

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

router.get("/get-profile/:id", basicAuthMiddleware, async (req, res) => {
    try {
        const response = await axios.get(
            `${process.env.MS2_URL}/get-profile/${req.params.id}`,
            {
                headers: {
                    "x-api-key": process.env.API_KEY,
                    "x-api-secret": process.env.API_SECRET
                },
                httpsAgent
            }
        );

    res.json(response.data);
  } catch (error: any) {
    console.error("MS2 ERROR:", error.response?.data || error.message);

    const status = error.response?.status || 500;
    const message =
      error.response?.data?.error ||
      "Error communicating with MS2";

    res.status(status).json({
      error: message
    });
  }
});

export default router;
export {};