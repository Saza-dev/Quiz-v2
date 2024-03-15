import React, { useEffect, useState } from "react";
import NavBarTwo from "./NavBarTwo";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function QuizLibrary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8070/library")
    .then((result) => {
      setData(result.data)
    });
  }, []);

  const navigate=useNavigate()

  function attempt(id){
    localStorage.setItem("QID",id)
    navigate("/attempt")
  }

  



  if (data.length===0) return "loading..."

  console.log(data)

  return (
    <div>
      <NavBarTwo />
      <div className="container  mt-5">
        <div className="text-center mt-5 mb-5">
          <h4>Here You can find all the quizes available in Qbit</h4>
        </div>
      </div>

      <div className="quizLib">
        <div className="container mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Quiz Name</th>
                <th scope="col">Difficulty</th>
                <th scope="col">Owner</th>
                <th scope="col"></th>
              </tr>
            </thead>

            
            <tbody>
            {data.map((quizes,index)=>(
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{quizes.quizName}</td>
                <td>{quizes.difficulty}</td>
                <td>{quizes.owner}</td>
                <td className="btn btn-dark">
                  <a onClick={()=>attempt(quizes._id)}>Attempt</a>
                </td>
            </tr>




                ))}
              
            </tbody>
          </table>
        </div>
        <div className="container ml-auto d-flex justify-content-end mt-5">
          <a className="btn btn-dark" href="/Dashboard">
            Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuizLibrary;
