const api = require('express').Router();
const { createNote, deleteNote } = require('../helpers/helper.js');
const notes = require('../db/db.json');


api.get('/notes', (req, res) => {
    return res.status(200).json(notes);
})

api.post('/notes', createNote);

api.delete('/notes/:id', deleteNote);

module.exports = api;