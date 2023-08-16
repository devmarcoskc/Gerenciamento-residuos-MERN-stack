import express from "express";
import { autorization } from "../middleware/auth.js";
import { getGeneralStats } from "../controllers/generalStats.js";

const router = express.Router();

router.get("/:id", autorization, getGeneralStats);

export default router;