import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import api from "./routes/api";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3333;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(api);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
