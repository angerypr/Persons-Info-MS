import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (payload: object) => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h"
  });
};
