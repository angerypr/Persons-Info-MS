import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "MS2 Manager is running" });
});

app.listen(3000, () => {
  console.log("MS2 Manager running on port 3000");
});
