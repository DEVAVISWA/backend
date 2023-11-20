const app = require('./server')
const config= require('./utils/config')
const logger= require('./utils/logger')


app.listen(config.PORT,  () => { 
    logger.log(`the server is running on port http://127.0.0.1:${config.PORT}`)
})