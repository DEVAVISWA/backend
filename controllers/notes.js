const notesRouter = require('express').Router()
const Note = require('../models/note')


//endpoint to GET all the notes
notesRouter.get('/', (req, res) => {
    Note.find({}, {})
        .then(notes => {
            res.status(200).json(notes)
        })
})

//end point to POST a  new data 
notesRouter.post('/', (req, res) => {
    const note = new Note(req.body)
    note.save()
        .then(() => {
            res.status(201).json({ message: 'note created successfully' })
        })
})

//end point to GET a single note based on id
notesRouter.get('/:id', (req, res) => {
    //get the id from params
    const id = req.params.id
    //use mongoose method
    Note.findById(id)
        .then(note => {
            res.status(200).json(note)
        })
        .catch(err => {
            res.status(404).json({ message: 'id dsnt exist' })
        })
})

//end point to DELETE a single resource based on id
notesRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then(deletedNote => {
            if (deletedNote) {
                res.status(204).json({ message: 'note deletes successfully' })
            } else {
                res.status(404).json({ message: 'id dsnt exits' })
            }
        })
        .catch(err => {
            res.status(404).json({ message: 'error deleting the note' })
        })
})


module.exports = notesRouter;