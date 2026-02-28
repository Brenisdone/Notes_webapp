import express from "express"
import {getAllNotes, getNoteById, createNote, updateNote, deleteNote} from "../controllers/notesControllers.js"

const router = express.Router();

export default router;


//An endpoint is a combination of URL + HTTP method that lets the client interact with the specific resource
router.get("/", getAllNotes);
router.get("/:id",getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

