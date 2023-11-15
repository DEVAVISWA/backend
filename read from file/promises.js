const fs = require('fs/promises')

async function readTestFile() {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
readTestFile()

sayHello=()=>{
    console.log('function say hello')
}
sayHello()

