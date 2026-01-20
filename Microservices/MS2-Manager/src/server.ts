import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import profileRoutes from "./routes/profile.routes";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/health", (_, res) => {
  res.json({ status: "MS2 Manager is running" });
});

app.use("/api", profileRoutes);

app.listen(process.env.PORT, () => {
  console.log(`MS2 Manager running on port ${process.env.PORT}`);
});


