import express from "express";
import { autorization } from "../middleware/auth.js";
import { createNote, deleteNote, getNotes, editNote, getNote } from "../controllers/notes.js";

const router = express.Router();

router.post("/", autorization, createNote);
router.get("/:orgaoId", autorization, getNotes);
router.get("/:noteId/specific", autorization, getNote);
router.patch("/:noteId", autorization, editNote);
router.delete("/:noteId", autorization, deleteNote);

export default router;
