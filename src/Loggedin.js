import React from "react";
import './loggedin.css'

function Loggedin() {
    return (
        <div className="login-container">
            <div className="login">

                <img src="./Assets/login-logo.png" alt="image" className="login-logo" />

                <div className="brand-name">
                    <h1>Gearmerit</h1>
                </div>

                <div className="slogan">
                    <p>Sel it for Right Price</p>
                </div>

                <div className="car-image">

                </div>

                <form class="login-form">
                   <div>
                        <input type="text" placeholder="E-Mail" className="e-mail"/>
                   </div>
                    <div>
                        <input type="password" placeholder="password" className="password"/>
                    </div>
                     
                     
                </form>



            </div>
        </div>
    );

}

export default Loggedin;