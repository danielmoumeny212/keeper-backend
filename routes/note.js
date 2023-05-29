const  NoteControllers = require( '../controllers/note');
const router = require("express").Router();
const Note = require("../models/Note");

// Create a new note
router.post("/new", NoteControllers.createNote);
// Update a note
router.put("/:id",NoteControllers.updateNote);
// Delete a note
router.delete("/:id",NoteControllers.deleteNote);
// get All Notes
router.get("/",NoteControllers.getNotes);

module.exports = router;
