import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import galeria from "./routes/galeria.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(galeria);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);
