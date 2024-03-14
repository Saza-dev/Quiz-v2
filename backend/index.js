const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require('./models/User')
const quizModel = require('./models/Quiz')


const app=express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/quizDB-V2")


app.post('/Signup',(req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/Login',(req,res)=>{
    const{email,password} = req.body;
    userModel.findOne({email:email})
    .then(users => {if(users.password === password) {
        res.send("Successfull")
    }
    else{
        res.send("Wrong")
    }}

    )
    .catch(err => res.json(err))
})


app.post('/Dashboard',(req,res)=>{
    const{email} = req.body
    userModel.findOne({email:email})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post('/Account',(req,res)=>{
    const{email} = req.body
    userModel.findOne({email:email})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.post('/newQuiz',(req,res)=>{
    quizModel.create(req.body)
    .then(res.send("Question Added"))
    .catch(err => res.json(err))
})

app.post('/userQuizes',(req,res)=>{
    const{email}=req.body
    quizModel.find({owner:email})
    .then(quizes=> res.json(quizes))
    .catch(err => res.json(err))
})

app.post('/viewQuiz',(req,res)=>{
    const{quID}=req.body
    quizModel.find({_id:quID})
    .then(quiz=> res.json(quiz))
    .catch(err => res.json(err))
})

app.patch('/updateStatus',(req,res)=>{
    const{QID,status}=req.body
    quizModel.updateOne({_id:QID},{quizStatus:status})
    .then(res.send("updated"))
    .catch(err => res.json(err))
})










app.listen(8070,()=>{
    console.log("Server is running")
})
