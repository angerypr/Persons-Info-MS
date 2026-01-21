import { Request, Response, NextFunction } from "express";

export const basicAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({
      error: "Authorization header missing"
    });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");

  const [username, password] = credentials.split(":");

  if (
    username !== process.env.BASIC_USER ||
    password !== process.env.BASIC_PASSWORD
  ) {
    return res.status(403).json({
      error: "Invalid Basic Auth credentials"
    });
  }

  next();
};
