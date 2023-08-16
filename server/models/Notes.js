import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
    {
        orgaoId: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        nota: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const Notes = mongoose.model("Notes", NotesSchema);
export default Notes;