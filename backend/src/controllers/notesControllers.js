export function getAllNotes (req, res) {
    res.status(200).send("Notes Fetched!");
}

export function createNote (res,req) {
    res.status(201).json({message: "Note created successfully"});
}

export function updateNote (res,req) {
    res.status(200).json({message: "Note updated successfully"});
}

export function deleteNote (res,req){
    res.status(200).json({message: "Note deleted successfully"});
}