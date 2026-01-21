import https from "https";
import { Router } from "express";
import axios from "axios";

const router = Router();

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

router.get("/get-profile/:id", async (req, res) => {
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

    //     
    res.json(response.data);
  } catch (error: any) {
    console.error("MS2 ERROR:", error.message);
    res.status(500).json({
      error: "Error communicating with MS2",
      details: error.message
    });
  }
});

export default router;