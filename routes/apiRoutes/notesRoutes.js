const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
let { notesArray } = require('../../db/notes.json');

router.get('/notes', (req, res) => {
    if(notesArray){
        req.body.id = notesArray.length.toString();
    } else{req,body.id = 0}
    res.json(createNewNote(req.body, notesArray));
});

router.post('/notes', (req, res) => {
    if(notesArray){
        req.body.id = notesArray.length.toString();
    } else
    {req.body.id =0}
    res.json(createNewNote(req.body, notesArray));
});

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notesArray = await deleteNote(id, notesArray);
    res.json(notesArray);
});

module.exports = router;
