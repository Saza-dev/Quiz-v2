import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBarTwo from "./NavBarTwo";

function Account() {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    const user = {
      email,
    };

    axios
      .post("http://localhost:8070/Dashboard", user)
      .then((result) => setUserData(result.data))
      .catch((err) => console.log(err));
  }, [email]);

  if (userData == null || userData === undefined) {
    return <p>loading...</p>;
  } else {
    console.log(userData);

    return (
      <div>
        <NavBarTwo />

        <div className="account">
          <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
              <div className=" image d-flex flex-column justify-content-center align-items-center mt-5">
                <button className="btn btn-secondary">
                  {" "}
                  <img src="./male.jpg" height="100" width="100" alt="men" />
                </button>
                <span className="name mt-5">{userData.name}</span>
                <span className="uName">@{userData.uName}</span>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                  <span className="em">{userData.email}</span>
                  <span>
                    <i className="fa fa-copy"></i>
                  </span>
                </div>
              </div>
              <button className="btn btn-dark  mt-5">Edit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
