import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBarTwo from "./NavBarTwo";
import { useNavigate } from "react-router-dom"; 

function ViewQuiz() {
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:8070/viewQuiz",{quID:localStorage.getItem("QID")})
      .then((result) => {setArr(result.data)});
  }, []);

  function goBack(){
    localStorage.removeItem('QID')
    navigate('/UserQuizes')
  }

  if (arr.length === 0) {return "loading..."};

  return (
    <div>
      <NavBarTwo />

      <div className="container addQuiz mt-3">
        <h3>Add Quiz</h3>

        <form className="mt-3">
          <div className="form-row">
            <div className="form-group col-md-10">
              <label>Quiz Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={arr[0].quizName}
                disabled
              />
            </div>
            <div className="form-group col-md-2">
              <label>Difficulty</label>
              <select className="form-control" disabled>
                <option value="" selected>
                {arr[0].difficulty}
                </option>
              </select>
            </div>
          </div>

          {arr[0].problems.map((quiz, index) => (
  <div key={index}>
    <div>
      <div className="form-group mt-5">
        <label>
          <b>Question No. {index + 1}</b>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder={quiz.question}
          disabled
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor={`answer-A-${index}`}>Answer A</label>
          <input
            type="text"
            className="form-control"
            id={`answer-A-${index}`}
            value={quiz.answer1} 
            disabled
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor={`answer-B-${index}`}>Answer B</label>
          <input
            type="text"
            className="form-control"
            id={`answer-B-${index}`}
            value={quiz.answer2} 
            disabled
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor={`answer-C-${index}`}>Answer C</label>
          <input
            type="text"
            className="form-control"
            id={`answer-C-${index}`}
            value={quiz.answer3} 
            disabled
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor={`answer-D-${index}`}>Answer D</label>
          <input
            type="text"
            className="form-control"
            id={`answer-D-${index}`}
            value={quiz.answer4}
            disabled
          />
        </div>
      </div>

      <div className="form-group mb-5">
        <label htmlFor={`correct-answer-${index}`}>Correct Answer</label>
        <select
          id={`correct-answer-${index}`}
          className="form-control"
          disabled
        >
          <option selected>{quiz.correctAnswer}</option>
        </select>
      </div>
    </div>
  </div>
))}






          <div className="form-group">
            <label htmlFor="quiz-duration">Duration</label>
            <select className="form-control" disabled>
              <option value="" selected>
              {arr[0].duration} Minutes
              </option>
            </select>
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button className="btn btn-dark" onClick={goBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default ViewQuiz;
