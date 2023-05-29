const Note = require("../models/Note");

const createNote = async (req, res) => {
  const newNote = new Note(req.body);
  try {
    noteSaved = await newNote.save();
    res.status(200).json(noteSaved);
  } catch (err) {
    res.status(500).json(err);
  }
}

const updateNote = async (req, res) => {
  if (req.params.id) {
    try {
      const givenNote = await Note.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("the note has been updated");
    } catch (err) {
      res.status(404).json("there is not a note with the given Id");
    }
  }
  else {
    res.status(403).json("Forbidden");
  }
}

const deleteNote = async (req, res) => {
  if (req.params.id) {
    try {
      const givenNote = await Note.findByIdAndDelete(req.params.id);
      res.status(200).json("the note has been deleted");
    } catch (err) {
      res.status(404).json("the note has already been deleted");
    }
  }
}
const getNotes = async(req, res) => { 
  console.log("new request");
  try {
    const notes = await Note.find({})
    res.status(200).json(notes)
     console.log('okey');
  } catch(err){
     res.status(404).json('there are not any notes available');
  }
}

module.exports = {
  getNotes,
  updateNote,
  deleteNote,
  createNote, 

}