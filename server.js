const express= require('express')

let notes = [
    {
        id:1,
        content: 'abcd',
        important: true
    },
    {
        id:2,
        content: 'efgh',
        important: false
    },
    {
        id:3,
        content: 'ijkl',
        important: true
    },
    {
        id:4,
        content: 'mnop',
        important: true
    },
    {
        id:5,
        content: 'qrst',
        important: false
    },
    {
        id:6,
        content: 'uvwx',
        important: true
    }
    
]

const app = express()

app.get('/', (req,res)=> { 
    res.send('<h1>notes application</h1>')
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

const HOST= '127.0.0.1'
const PORT = 3000


app.listen(PORT,HOST,()=> {
    console.log(`the server is running at http://${HOST}:${PORT}`)
})