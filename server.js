const express = require('express')
const app = express()
const mongoose= require('mongoose')
const config= require('./utils/config') 
const {log,err} = require('./utils/logger')
const cors = require('cors') //(1)import cors

app.use(cors())  //(2) use cors
app.use(express.json())

log('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI) 
    .then (()=> {
        log('successfuly connected to mongoDB')
    })
    .catch((error)=> {
        err(error)
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

app.listen(config.PORT,  () => { 
    log(`the server is running on port http://127.0.0.1:${config.PORT}`)
})