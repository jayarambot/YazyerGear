

import React from "react";
import { Link } from "react-router-dom";
import './login.css'
function Login(){

    return(

      
      <div className="login-container">
        <div className="login">
             
               <img src="./Assets/login-logo.png" alt="image" className="login-logo"/>
              
             <div className="brand-name">
                   <h1>Gearmerit</h1>
             </div>

             <div className="slogan">
                  <p>Sell it for Right Price</p>
             </div>

             <div className="car-image">
                     <img src="./Assets/login-car-removebg-preview.png" className="login-car" alt="car-img"/>
             </div>
  
             <Link to={'/login'} ><button>LOGIN</button></Link>
              
        </div>
      </div>
    );
}


export default Login;