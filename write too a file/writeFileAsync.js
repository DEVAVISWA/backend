const fs= require('fs')
const content= 'welcome students'

fs.writeFile('./test.txt',content, err =>{
    if(err) console.log(err)
    console.log('content written successfully')
})