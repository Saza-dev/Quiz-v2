import React, { useEffect, useState } from "react";
import NavBarTwo from "./NavBarTwo";
import axios from "axios";

function Attempt(){

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.post('http://localhost:8070/attempt',({QID:localStorage.getItem('QID')}))
        .then(result=>setData(result.data))
    },[])




if (data.length === 0) return "loading..."

console.log(data)

    return(
        <div>
    <NavBarTwo/>
    <div className="container">
      <div className="row mt-5">
        <h3 className="col-md-3">Quiz Name :</h3>
        <h4 className="col-md">{data.quizDetails[0].quizName}</h4>
      </div>
      <div className="row mt-3 ">
        <h3 className="col-md-3">Difficulty :</h3>
        <h4 className="col-md">{data.quizDetails[0].difficulty}</h4>
      </div>
      <div className="row mt-3 ">
        <h3 className="col-md-3">Time Duration :</h3>
        <h4 className="col-md">{data.quizDetails[0].duration} Minutes</h4>
      </div>

      <div className="row mt-5 justify-content-center">
        <a href="/quiz"><button className="btn btn-dark">Attempt Quiz</button></a>
      </div>
    </div>

    <div className="leaderboard" >
    <div className = "container mt-5">
      <h3>Leaderboard</h3>


    <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
    
        <tbody>
    {data.attempts.map((attempt,index)=>(
         
          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{attempt.attemptierName}</td>
            <td>{attempt.attemptierScore}%</td>
          </tr>
          

    ))}
        </tbody>
    


    </table>

  </div>
  </div>
  </div>

    )
}

export default Attempt;