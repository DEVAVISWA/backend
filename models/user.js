const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema({  //1
    name: String,
    email:String,
    password:Number,
    createdAt: String,
    updatedAt: String
})

const User = mongoose.model('User', userSchema, 'users') //2

module.exports = User