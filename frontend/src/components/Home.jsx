import React from 'react';     
import NavBarOne from './NavBarOne';

function Home(){
  
return(
    <div>
         < NavBarOne />
         <div className="container homePara text-white-50 text-center">
            <p>Welcome to our cutting-edge Quiz System, where the thrill of knowledge meets the excitement of competition!</p>
            <div className="container">
               <a href="Signup"><button className="btn btn-dark my-2 mu-sm-0">Sign Up</button></a> 
                <button className="btn btn-dark my-2 my-sm-0">Demo</button>
            </div>
        </div>

        <div id="light">
            <div id="lineh1"></div>
            <div id="lineh2"></div>
            <div id="lineh3"></div>
            <div id="lineh4"></div>
            <div id="lineh5"></div>
            <div id="lineh6"></div>
            <div id="lineh7"></div>
            <div id="lineh8"></div>
        </div>


    </div>
   


)}

export default Home;
