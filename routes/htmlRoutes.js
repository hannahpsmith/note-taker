const html = require('express').Router();
const path = require('path');

//HTML route to index page
html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// HTML route to notes page
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = html;