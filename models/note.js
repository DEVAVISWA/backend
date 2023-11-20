const mongoose= require('mongoose')

const noteSchema = new mongoose.Schema({
    id: Number,
    content : String,
    important: Boolean
})

const Note= mongoose.model('Note',noteSchema,'notes')

module.exports= Note