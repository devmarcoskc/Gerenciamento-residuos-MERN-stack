import express from "express";
import { autorization } from "../middleware/auth.js";
import { deleteUser, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/:id", autorization, getUser);
router.patch("/:id", autorization, updateUser);
router.delete("/:id", autorization, deleteUser);

export default router;