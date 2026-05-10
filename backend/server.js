import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Seafood Shack API is running");
});

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB error:", error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});