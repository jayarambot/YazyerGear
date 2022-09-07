import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
         <Link to='/'>Home</Link>
         <Link to='/products'>Products</Link>
         <Link to='/posts'>Posts</Link>
        </div>
    )
}

export default Navbar;