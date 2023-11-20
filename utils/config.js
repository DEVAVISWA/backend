require('dotenv').config() //(2)use the envt variables here

const MONGODB_URI= process.env.MONGODB_URI
const PORT= process.env.PORT

module.exports={
    MONGODB_URI,
    PORT
} //(3)export to server.js