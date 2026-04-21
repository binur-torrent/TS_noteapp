import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is working 🚀" });
});

// example API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Binur" },
    { id: 2, name: "Alex" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});