const express = require('express')
const app = express()
const mongoose= require('mongoose') //(2)


app.use(express.json())

//CONNECTION TO DB (1)
//get the url from mongoDB atlas cluster (1)
const url= `mongodb+srv://devaviswa15:devabond007@devacluster.3yksksz.mongodb.net/B51DB`

//(3) connect moongoose
mongoose.connect(url)
    .then (()=> {
        console.log('successfuly connected to mongoDB')
    })
    .catch((error)=> {
        console.error(error)
    })

app.get('/', (req, res) => {
    res.send('<h1>Notes application</h1>')
})

//(5) Define a schema
const noteSchema = new mongoose.Schema({
    id: Number,
    content : String,
    important: Boolean
})

//(4)create or define a model to access datas from DB and see it in endpoints in postman
const Note= mongoose.model('Note',noteSchema,'notes')

//(6) endpoints fo view all note
app.get('/api/notes', (req,res)=> {   
    Note.find({},{})
        .then(notes=> {
            res.status(200).json(notes)
        })
})

// endpoint to create a new resource based on the request data
app.post('/api/notes', (request, response) => {
    const note = new Note(request.body);

    note.save()
        .then(() => {
            response.status(201).json({ message: 'note created successfully' });
        });
});

// endpoint to fetch a single resource based on it
app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    Note.findById(id)
        .then(note => {
            response.status(200).json(note);
        })
        .catch(err => {
            response.status(404).json({ message: 'id does not exists' });
        })
});

// deletes a single resource based on id
app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    Note.findByIdAndDelete(id)
        .then(deletedNote => {
            if (deletedNote) {
                response.status(204).json({ message: 'note deleted successfully' });
            } else {
                response.status(404).json({ message: 'id does not exists' });
            }
        })
        .catch(err => {
            response.status(404).json({ message: 'deleting note failed' });
        })
});

// replaces the entire note object identified by an id
app.put('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    const noteToReplace = request.body;

    Note.findByIdAndUpdate(id, noteToReplace)
        .then(updatedNote => {
            if (updatedNote) {
                response.status(200).json({ message: 'note replaced successfully' });
            } else {
                response.status(404).json({ message: 'id does not exists' });
            }
        })
        .catch(err => {
            response.status(404).json({ message: 'replacing the note failed...' });
        })
});

app.patch('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    const noteToPatch = request.body;

    Note.findByIdAndUpdate(id, noteToPatch)
        .then(updatedNote => {
            if (updatedNote) {
                response.status(200).json({ message: 'note patched successfully' });
            } else {
                response.status(404).json({ message: 'id does not exists' });
            }
        })
        .catch(err => {
            response.status(404).json({ message: 'patching the note failed...' });
        })
});

const HOST = '127.0.0.1'
const PORT = 3000


app.listen(PORT,  () => {
    console.log(`the server is running at http://${HOST}:${PORT}`)
})

