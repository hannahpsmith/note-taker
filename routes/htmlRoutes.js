const router = require('express').Router();
const path = require('path');


// HTML route to notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//HTML route to index page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;