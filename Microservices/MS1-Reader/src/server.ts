import https from "https";
import fs from "fs";
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

const PORT: number = parseInt(process.env.PORT || "3001", 10);

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
};

https.createServer(options, app).listen(PORT, () => {
    console.log(`MS1 Reader running on https://localhost:${PORT}`);
});
