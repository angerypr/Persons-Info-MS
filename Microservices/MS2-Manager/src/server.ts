import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/health", (_, res) => {
  res.json({ status: "MS2 Manager is running" });
});

app.listen(process.env.PORT, () => {
  console.log(`MS2 Manager running on port ${process.env.PORT}`);
});
