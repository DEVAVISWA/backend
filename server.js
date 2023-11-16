const http= require('http')

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

const server = http.createServer((request,response)=> {
    response.statusCode=200
    response.setHeader=('Content-Type','application/json')
    response.end(JSON.stringify(notes))
})

const host= '127.0.0.1'
const port = 3000


server.listen(port,host,()=> {
    console.log(`the server is running at http://${host}:${port}`)
})