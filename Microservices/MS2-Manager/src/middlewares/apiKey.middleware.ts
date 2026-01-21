import { Request, Response, NextFunction } from "express";

export const apiKeyMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const apiKey = req.headers["x-api-key"];
    const apiSecret = req.headers["x-api-secret"];

    if (!apiKey || !apiSecret) {
        return res.status(401).json({
            error: "API Key or Secret missing"
        });
    }

    if (
        apiKey !== process.env.API_KEY ||
        apiSecret !== process.env.API_SECRET
    ) {
        return res.status(403).json({
            error: "Invalid API Key or Secret"
        });
    }

    next();
};