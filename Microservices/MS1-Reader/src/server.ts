import express from "express";
import dotenv from "dotenv";
import profileRoutes from "./routes/profile.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "MS1 Reader is running" });
});

app.use("/api", profileRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`MS1 Reader running on port ${PORT}`);
});
