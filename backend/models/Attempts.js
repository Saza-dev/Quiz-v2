const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
quizID:String,
attemptierName:String,
attemptierAnswers:[],
attemptierScore:String,
quizAnswers:[],
attemptierEmail:String,

})

const attemptModel = mongoose.model("attempts",AttemptSchema)


module.exports =  attemptModel