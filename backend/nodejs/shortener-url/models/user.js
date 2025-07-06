const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamp: true
})

const USER = mongoose.model('user', userSchema)

module.exports = USER

