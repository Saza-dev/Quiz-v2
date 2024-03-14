import React, { useState } from 'react';     
import NavBarOne from './NavBarOne';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login(){



  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [loginError, setLoginError] = useState(false);
  
  const navigate = useNavigate()


  function checkData(e){
    e.preventDefault();
    const user = {
      email,
      password
  }
  
  axios.post('http://localhost:8070/Login',user)
  .then((result)=>{
    console.log(result)
    if(result.data === 'Successfull' ){
      localStorage.setItem('email', email);
      console.log('Logged in Successfully')
      navigate("/Dashboard")
    }
    else {
      setLoginError(true);
    }
    }).catch((err)=>{
        console.log(err);
    })
  }

    return(
    <div>
         < NavBarOne />

    <div className="container login mx-auto">
    {loginError && <p className='ErrMessage'>Password or Email is Wrong. Please Try Again.....</p>}

    <form onSubmit={checkData}>

    <div className="form-outline mb-4">
      <input type="email" className="form-control" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} required/>
      <label className="form-label" >Email address</label>
    </div>
  

    <div className="form-outline mb-4">
      <input type="password"  className="form-control" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required/>
      <label className="form-label" >Password</label>
    </div>
  

    <div className="row mb-4">
      <div className="col d-flex justify-content-center">

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
          <label className="form-check-label" > Remember me </label>
        </div>
      </div>
  
      <div className="col">
        <a href="/">Forgot password?</a>
      </div>
    </div>
    <button type="submit" className="btn btn-dark btn-block mb-4">Login</button>
    </form>
    <div className="text-center">
        <p>Not a member? <a href="/SignUp">Register</a></p>
    </div>
    </div>  
    </div>
)}

export default Login;