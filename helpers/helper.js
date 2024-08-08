const notes = require('../db/db.json');
const fs = require ('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const createNote = async (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
        title,
        text,
        id: uuidv4()
    };
    
    try {
        const data = await readFile('./db/db.json', 'utf8');
        notes.push(newNote);

        await writeFile('./db/db.json', JSON.stringify(notes, null, 4));
        res.status(201).json(notes);
    } catch (error) {
        console.log('Error, try again');
    }
  } else {
    res.status(400).json({error: 'Title and text required'});
  }
}

const deleteNote = async (req, res) => {
    const data = await readFile('./db/db.json', 'utf8');
    const { id } = req.params;
    
    const index = notes.findIndex(note => note.id === id);

    if (index !== -1) {
        notes.splice(index, 1);
        await writeFile('./db/db.json', JSON.stringify(notes, null, 4));

        res.status(204).json(notes);
    } else {
        res.status(404).json({error: 'No note found'});
    }
}




module.exports = { createNote, deleteNote };