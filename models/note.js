const mongoose= require('mongoose')

const noteSchema = new mongoose.Schema({
    id: Number,
    content : String,
    important: Boolean
})

module.exports= mongoose.model('Note',noteSchema,'notes')