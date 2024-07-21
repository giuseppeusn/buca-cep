import { Router } from "express";
import getAddress from "../controllers/GET/getAddress";

const api = Router();

api.get("/address/:code", getAddress);

export default api;
