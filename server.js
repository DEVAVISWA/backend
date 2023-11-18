const express = require('express')
const app = express()

//json parser middleware (to convert req body obj to json)
app.use(express.json())

let notes = [
    {
        id: 1,
        content: 'abcd',
        important: true
    },
    {
        id: 2,
        content: 'efgh',
        important: false
    },
    {
        id: 3,
        content: 'ijkl',
        important: true
    },
    {
        id: 4,
        content: 'mnop',
        important: true
    },
    {
        id: 5,
        content: 'qrst',
        important: false
    },
    {
        id: 6,
        content: 'uvwx',
        important: true
    }

]

app.get('/', (req, res) => {
    res.send('<h1>Notes application</h1>')
})

//GET all notes
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

//GET a single note
app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id
    const note = notes.find(note => note.id == id)
    if (note) {
        res.status(200).json(note)
    } else {
        res.status(404).json({ message: 'the id dosent exist' })
    }
})

//POST a note
app.post('/api/notes', (req, res) => {
    // console.log(req.body) // will be undefined (so we use middleware) 
    //after middleware { id: 7, content: 'yzab', important: false }
    //now concat the req.body to notes array
    notes = notes.concat(req.body) //replace notes with notes 
    res.status(201).json({ message: 'notes created successfully' })
})

//DELETE a note
app.delete('/api/notes/:id', (req, res) => {
    //get the id content which is to be deleted
    const id = req.params.id
    //find the note matching the id
    const note = notes.find(note => note.id == id)
    notes = notes.filter(notes => notes.id != id)
    if (note) {
        res.status(200).json({ message: 'note deletes successfully' })
    } else {
        res.status(404).json({ message: 'id dsnt exist' })
    }
})

//PUT , replace the entire note 
app.put('/api/notes/:id', (req, res) => {
    //find the id from params
    const id = req.params.id
    //get the note to be replaced from the user request
    const noteToReplace = req.body
    //find the obj matching the id
    const note = notes.find(note => note.id == id)

    notes = notes.map(note => note.id == id ? noteToReplace : note)

    if (note) {
        res.status(200).json({ message: "the note is replaced successfully" })
    } else {
        res.status(404).json({ message: 'id dsnt exists' })
    }
})

//PATCH , replace the particular note 
app.patch('/api/notes/:id', (req, res) => {
    //find the id from params
    const id = req.params.id
    //get the note to be replaced from the user request
    const noteToReplace = req.body
    //find the obj matching the id
    const note = notes.find(note => note.id == id)

    notes = notes.map(note => note.id == id ? { ...note, ...noteToReplace } : note)

    if (note) {
        res.status(200).json({ message: "the note is patched successfully" })
    } else {
        res.status(404).json({ message: 'id dsnt exists' })
    }
})

const HOST = '127.0.0.1'
const PORT = 3000


app.listen(PORT, HOST, () => {
    console.log(`the server is running at http://${HOST}:${PORT}`)
})