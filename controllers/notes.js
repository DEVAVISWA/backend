const notesRouter= require('express').Router()
const Note= require('../models/note')


//endpoint to get all the notes
notesRouter.get('/', (req,res)=> {   
    Note.find({},{})
        .then(notes=> {
            res.status(200).json(notes)
        })
})

//end point to pst a  new data 
notesRouter.post('/', (req,res)=> {
    const note= new Note(req.body)
    note.save()
        .then(()=> {
            res.status(201).json({message:'note created successfully'})
        })
})

module.exports= notesRouter;