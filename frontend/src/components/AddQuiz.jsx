import React, { useState } from "react";
import NavBarTwo from "./NavBarTwo";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddQuiz (){
    const [problems, setproblems] = useState([
        { id: 1, correctAnswer: "", question: "", answer1: "", answer2: "", answer3: "", answer4: "" }
      ]);
    
      const [quizName,setquizName] = useState();
      const [difficulty,setDifficulty] = useState();
      const [duration,setDuration] = useState();

      const navigate = useNavigate()


      const addQuestion = () => {
        setproblems(prevQuestions => [
          ...prevQuestions,
          { id: prevQuestions.length + 1, correctAnswer: "", question: "", answer1: "", answer2: "", answer3: "", answer4: "" }
        ]);
      };
    
      const handleInputChange = (questionId, field, value) => {
        setproblems(prevQuestions =>
          prevQuestions.map(q =>
            q.id === questionId ? { ...q, [field]: value } : q
          )
        );
      };


      function sendData(e){
        e.preventDefault();
        const newQuiz = {
            quizName,
            difficulty,
            owner: localStorage.getItem("email"),
            quizStatus: "private",
            problems,
            duration
        }

        console.log(newQuiz)

        axios.post('http://localhost:8070/newQuiz',newQuiz)
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })
        navigate("/UserQuizes")
      }

    return(
        <div>
            <NavBarTwo/>


    <div className="container addQuiz mt-3">
      <h3>Add Quiz</h3>

      <form className="mt-3" onSubmit={sendData}>
        <div className="form-row">
          <div className="form-group col-md-10">
            <label>Quiz Name</label>
            <input type="text" className="form-control" placeholder="Quiz Name" onChange={(e)=>{
                        setquizName(e.target.value)
                    }}/>
          </div>
          <div className="form-group col-md-2">
              <label >Difficulty</label>
              <select className="form-control" onChange={(e)=>{
                setDifficulty(e.target.value)
              }}>
                <option selected disabled>Choose...</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
          </div>   
        </div>
        <div >
        {problems.map(question =>(

        <div key={question.id}>
        <div className="form-group mt-5">
                <label htmlFor={`inputQuizName${question.id}`}><b>Question No.{question.id}</b></label>
                <input type="text" className="form-control" id={`Quiz-name${question.id}`} value={question.question} placeholder={`Question No.${question.id}`} onChange={(e) => handleInputChange(question.id, "question", e.target.value)}
                  required/>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="answer-A">Answer A</label>
                    <input type="text" className="form-control" id="mcqAnswer-A"
                                onChange={(e) => handleInputChange(question.id, "answer1", e.target.value)}
                                required/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="answer-B">Answer B</label>
                    <input type="text" className="form-control" id="mcqAnswer-B"
                                onChange={(e) => handleInputChange(question.id, "answer2", e.target.value)}
                                required/>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="answer-C">Answer C</label>
                    <input type="text" className="form-control" id="mcqAnswer-C"
                                onChange={(e) => handleInputChange(question.id, "answer3", e.target.value)}
                                required/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="answer-D">Answer D</label>
                    <input type="text" className="form-control" id="mcqAnswer-D"
                                onChange={(e) => handleInputChange(question.id, "answer4", e.target.value)}
                                required/>
                </div>
                </div>

                <div className="form-group mb-5">
                <label htmlFor="inputGroupSelect01">Correct Answer</label>
                <select id="inputGroupSelect01" className="form-control"  onChange={(e) => handleInputChange(question.id, "correctAnswer", e.target.value)} >
                    <option selected disabled>Choose...</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                    </div>   
                    </div>
            
        ))}
        
        </div>



      <div className="d-flex justify-content-end">
        <button className="btn btn-dark" onClick={addQuestion}>+</button>
      </div>

      <div className="form-group">
        <label htmlFor="quiz-duration" >Duration</label>
        <select className="form-control" onChange={(e)=>{
                        setDuration(e.target.value)
                    }}>
          <option selected disabled>Choose...</option>
          <option value="15">15 Minutes</option>
          <option value="30">30 Minutes</option>
          <option value="45">45 Minutes</option>
          <option value="60">60 Minutes</option>
        </select>
    </div>


      
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-dark" >Publish</button>
      </div>
      </form>
    </div>

        </div>
    )

}

export default AddQuiz;