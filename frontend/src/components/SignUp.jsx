import React, { useState } from 'react'
import NavBarOne from './NavBarOne'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function SignUp(){

    const[name,setName] = useState("")
    const[uName,setUName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")


    const navigate = useNavigate()

    function sendData(e){

        e.preventDefault();

        const newUser = {
            name,
            uName,
            email,
            password
        }

        axios.post('http://localhost:8070/Signup',newUser)
        .then((result)=>{
                localStorage.setItem('email', result.data.email);
                console.log("Acc created Successfully")                
                navigate("/Dashboard")
        }).catch((err)=>{
            console.log(err);
        })

    }


    return(
        <div>
            <NavBarOne />
    <div className="container signUp mx-auto mt-5">

    <form onSubmit={sendData}>

    <div className="form-outline mb-4 ">
        <input type="text" className="form-control" onChange={(e)=>{
                        setName(e.target.value)
                    }} required/>
        <label className="form-label">Full Name</label>
      </div>

    <div className="form-outline mb-4">
        <input type="text" className="form-control" onChange={(e)=>{
                        setUName(e.target.value)
                    }} required/>
        <label className="form-label">User Name </label>
    </div>


    <div className="form-outline mb-4">
      <input type="email" className="form-control" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} required/>
      <label className="form-label">Email address</label>
    </div>
  

    <div className="form-outline mb-4">
      <input type="password" className="form-control" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required/>
      <label className="form-label" >Password</label>
    </div>

    <button type="submit" className="btn btn-dark btn-block mb-4">Sign Up</button>
    </form>

    <div className="text-center">
        <p>Already have an Account ? <a href="Login">Login</a></p>
    </div>
    </div>
        </div>
    )
}

export default SignUp;