import Notes from "../models/Notes.js";

export const createNote = async (req, res) => {
    try {
        const {orgaoId, nome, nota} = req.body;

        const newNote = new Notes({
            orgaoId, nome, nota
        });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch(error) {
        res.status(404).json({error: error.message});
    }  
}

export const getNotes = async (req, res) => {
    try {
        const {orgaoId} = req.params;

        const orgaoNotes = await Notes.find({orgaoId}).sort({createdAt:-1});

        res.status(200).json(orgaoNotes);
    } catch(error) {
        res.status(404).json({error: error.message});
    }
}

export const getNote = async (req, res) => {
    try {
        const {noteId} = req.params;

        const note = await Notes.findById(noteId);

        res.status(200).json(note);
    } catch(error) {
        res.status(404).json({error: error.message});
    }
}

export const editNote = async (req, res) => {
    try {
        const {noteId} = req.params;
        const {nome, nota} = req.body;

        console.log("Noteid: ", noteId);

        const note = await Notes.findById(noteId);
        note.nome = nome;
        note.nota = nota;

        await note.save();
        res.status(200).json(note);
    } catch(error) {
        res.status(502).json({error: error.message});
    }
}

export const deleteNote = async (req, res) => {
    try {
        const {noteId} = req.params;
        const {orgaoId} = req.body;

        await Notes.findByIdAndDelete(noteId);
        const updatedNotes = await Notes.find({orgaoId: orgaoId});
       
        res.status(200).json(updatedNotes);
    } catch(error) {
        res.status(404).json({error: error.message});
    }
}