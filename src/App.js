import React from "react";
import {Route, Routes,Switch} from 'react-router-dom';
import Login from "./Login";
import Loggedin from "./Loggedin";

function App(){
    return(
    
      <div>
      <Routes>
         <Route exact path="/" component = {Login} />
         <Route  exact path="/" component = {Loggedin} />
      </Routes>
      </div>
      
    );
}

export default App;
