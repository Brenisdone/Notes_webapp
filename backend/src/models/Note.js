import mongoose from "mongoose"

//Creating schema for model
const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
    },
    {timestamps:true}
);

//Creating model based on schema
const Note = mongoose.model("Note",noteSchema);

export default Note;