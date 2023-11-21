const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema({
    name: String,
    email:String,
    password:Number,
    createdAt: String,
    updatedAt: String
})

const User = mongoose.model('User', userSchema, 'users')

module.exports = User