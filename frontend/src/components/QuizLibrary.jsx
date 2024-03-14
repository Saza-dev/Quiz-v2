import React, { useEffect, useState } from "react";
import NavBarTwo from "./NavBarTwo";
import axios from "axios";

function QuizLibrary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8070/library")
    .then((result) => {
      setData(result.data)
    });
  }, []);



  if (data.length===0) return "loading..."


  return (
    <div>
      <NavBarTwo />
      <div className="container  mt-5">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Question Name"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-dark" data-mdb-ripple-init>
            search
          </button>
        </div>

        <div className="text-center mt-3">
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
                  <a href="/attempt">Attempt</a>
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
