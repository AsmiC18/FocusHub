import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    id: Number,
    text:String
});

const Note= mongoose.model("Note",NoteSchema);

export default Note;