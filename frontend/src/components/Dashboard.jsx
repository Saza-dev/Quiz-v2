import React, { useEffect, useState } from "react";
import NavBarTwo from "./NavBarTwo";
import axios from "axios";

function Dashboard() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    const user = {
      email,
    };
    axios
      .post("http://localhost:8070/Dashboard", user)
      .then((result) => setUserName(result.data.uName))
      .catch((err) => console.log(err));
  }, [email]);

  if (userName == null || userName === undefined) {
    return <p>loading...</p>;
  } else {
    console.log(userName);
    return (
      <div>
        <NavBarTwo />

        <h2 className="ml-5 mt-5">Welcome {userName}</h2>

        <div className="container-fluid   dashboard ">
          <div className="row justify-content-center">
            <div className="cards">
              <div className="d-flex">
                <a href="./QuizLibrary">
                  <div className="card ">
                    <div className="card-body btn-dark">
                      <h3 className="card-title mt-2">Quiz Library</h3>
                      <p className="card-text mt-4">
                        You can find all the quizes that available for you in
                        Qbit{" "}
                      </p>
                    </div>
                  </div>
                </a>

                <a href="./UserAttempts">
                  <div className="card">
                    <div className="card-body btn-dark">
                      <h3 className="card-title mt-2">Attempts</h3>
                      <p className="card-text mt-4">
                        You can check your recent attempts to quizes and marks
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="d-flex">
                <a href="./AddQuiz">
                  <div className="card">
                    <div className="card-body btn-dark">
                      <h3 className="card-title mt-2">Add Quiz</h3>
                      <p className="card-text mt-4">Add a quiz to Qbit</p>
                    </div>
                  </div>
                </a>

                <a href="./UserQuizes">
                  <div className="card">
                    <div className="card-body btn-dark">
                      <h3 className="card-title mt-2">Your Quizes</h3>
                      <p className="card-text mt-4">
                        Quizes that you added to Qbit
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
