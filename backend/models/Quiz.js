const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    owner:String,
    difficulty:String,
    duration:String,
    problems:[],
    quizName:String,
    quizStatus:String
})

const quizModel = mongoose.model("quizes",QuizSchema)


module.exports =  quizModel