import express from "express";
import cors from "cors";
import fireAlertRoutes from "./src//routes/email.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/fireAlert", fireAlertRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("API de detección de incendios - Texaco");
});

export default app;
