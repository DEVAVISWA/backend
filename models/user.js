const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema({  //2
    name: {
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema, 'users') //1

module.exports = User