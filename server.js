const express = require('express')
const app = express()
const mongoose= require('mongoose')
const config= require('./utils/config') 
const {log,err} = require('./utils/logger')
const cors = require('cors')
const notesRouter= require('./controllers/notes')
const userRouter = require('./controllers/users')

mongoose.set('strictQuery', false)

app.use(cors()) 
app.use(express.json())

log('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI) 
    .then (()=> {
        log('successfuly connected to mongoDB')
    })
    .catch((error)=> {
        err(error)
    })


app.use('/api/notes',notesRouter)
app.use('/api/users' ,userRouter)



module.exports = app;

