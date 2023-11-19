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



const HOST = '127.0.0.1'
const PORT = 3000


app.listen(PORT,  () => {
    console.log(`the server is running at http://${HOST}:${PORT}`)
})

