const notesRouter= require('express').Router()
const Note= require('../models/note')


//endpoint to GET all the notes
notesRouter.get('/', (req,res)=> {   
    Note.find({},{})
        .then(notes=> {
            res.status(200).json(notes)
        })
})



module.exports= notesRouter;