const fs = require('fs/promises')

const content = `todays date :- ${new Date().toISOString()}`

async function writeTestFile() {
    try {
        await fs.writeFile('./test.txt', content)
        console.log('content written successfully')
    } catch (err) {
        console.log(err)
    }
}
writeTestFile()