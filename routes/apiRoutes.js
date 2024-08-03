const router = require('express').Router();
const { createNote, deleteNote } = require('../helpers/helper.js');
const notes = require('../db/db.json');


router.get('/notes', (req, res) => {
    return res.status(200).json(notes);
})

router.post('/notes', createNote);

router.delete('/notes/:id', deleteNote);

module.exports = router;