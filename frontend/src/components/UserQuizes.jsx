import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBarTwo from "./NavBarTwo";
import { useNavigate } from "react-router-dom";

function UserQuizes(){

    const [email,setEmail] = useState("");
    const [quizes,setQuizes]= useState([]);
    const [loading,setLoading] = useState(true)
    const [quizStatus, setQuizStatus] = useState(""); 


    const navigate = useNavigate()

    useEffect(()=>{
        setEmail(localStorage.getItem("email"))
    },[])

    useEffect(()=>{

        const quizOwner = {
            email
        }
        axios.post('http://localhost:8070/userQuizes',quizOwner)
        .then(result => setQuizes(result.data),setLoading(false),console.log("here"))
        .catch(err => console.log(err))
    },[email,quizStatus])


    function changeStatus(QID,qIndex){
        if  (quizes[qIndex].quizStatus === 'private'){
            let data = {
                QID : QID ,
                status : 'public'
            }
            axios.patch('http://localhost:8070/updateStatus',data)
            .then(result => console.log(result.data),setQuizStatus('public'),window.location.reload())
            .catch(err => console.log(err))
        }
        else if (quizes[qIndex].quizStatus === 'public'){
            let data = {
                QID : QID ,
                status : 'private'
            }
            axios.patch('http://localhost:8070/updateStatus',data)
            .then(result => console.log(result.data),setQuizStatus('private'),window.location.reload())
            .catch(err => console.log(err))
        }
    }

    function viewClicked(QID){
      localStorage.setItem("QID",QID)
      navigate("/viewQuiz");
    }



  

    if (quizes.length===0) {return  <div>Loading...</div>;}
    
    else{

    return(
        <div>
            <NavBarTwo/>

            <div class="container  mt-5">



      <div class="text-center mt-3">
        <h4>Here You can find all the quizes you Created</h4>
      </div>

    </div>



    <div class="userQuizes mt-4">
      <div class="container">
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Quiz Name</th>
              <th scope="col">Difficulty</th>
              <th scope="col ">Public/Private</th>
            </tr>
          </thead>

        <tbody >
        
        {
          quizes.map((quiz, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{quiz.quizName}</td>
              <td>{quiz.difficulty}</td>
              <td class="btn btn-dark pub" onClick={()=>changeStatus(quiz._id,index)}> {quiz.quizStatus.toUpperCase()} </td>
              <td class="btn btn-dark" onClick={()=>viewClicked(quiz._id)}>View</td>
            </tr>
          ))
        }

        </tbody>
      </table>

    </div>
    <div class="container ml-auto d-flex justify-content-end mt-5">
      <a class="btn btn-dark" href="/Dashboard">Back</a>
    </div>

    </div>
        </div>
    )
    }
}

export default UserQuizes;