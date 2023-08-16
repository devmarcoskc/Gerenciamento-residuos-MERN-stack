import express from "express";
import { autorization } from "../middleware/auth.js";
import { createTrashCollection, getTrashCollections } from "../controllers/trashCollections.js";

const router = express.Router();

router.post("/", autorization, createTrashCollection);
router.get("/:orgaoId", autorization, getTrashCollections);

export default router;