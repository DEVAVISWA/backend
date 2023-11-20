const express = require('express')
const app = express()
const mongoose= require('mongoose')
const config= require('./utils/config') //(4)import from config.js

app.use(express.json())
mongoose.connect(config.MONGODB_URI) // (5)use config.MONGODB_URI
    .then (()=> {
        console.log('successfuly connected to mongoDB')
    })
    .catch((error)=> {
        console.error(error)
    })

app.get('/', (req, res) => {
    res.send('<h1>Notes application</h1>')
})

const noteSchema = new mongoose.Schema({
    id: Number,
    content : String,
    important: Boolean
})

const Note= mongoose.model('Note',noteSchema,'notes')

app.get('/api/notes', (req,res)=> {   
    Note.find({},{})
        .then(notes=> {
            res.status(200).json(notes)
        })
})

app.listen(config.PORT,  () => { //(use config.PORT)
    console.log(`the server is running on port http://127.0.0.1:${config.PORT}`)
})