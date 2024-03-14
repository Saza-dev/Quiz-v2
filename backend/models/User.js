const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    uName: String,
    email: String,
    password: String
})

const userModel = mongoose.model("users",UserSchema)


module.exports =  userModel