import express from "express";
import { autorization } from "../middleware/auth.js";
import { createTrashCollection, 
getTrashCollections, 
getTrashCollectionsByAddress } 
from "../controllers/trashCollections.js";

const router = express.Router();

router.post("/", autorization, createTrashCollection);
router.get("/:orgaoId", autorization, getTrashCollections);
router.get("/:orgaoId/:addressEncoded", autorization, getTrashCollectionsByAddress);

export default router;