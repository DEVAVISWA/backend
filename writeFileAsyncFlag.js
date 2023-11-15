const fs = require('fs')
const content = '\nappend mode flag adds content at end'

fs.writeFile('./test.txt', content, {flag:'a'}, err => {
    if (err) console.log(err)
    console.log('content written successfully')
})