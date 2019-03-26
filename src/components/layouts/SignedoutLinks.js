import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const SignedoutLinks = () => {
    return ( 
       <ul  className="right">
        <li><NavLink to="/signup">Sign up</NavLink> </li>
        <li><NavLink to="/signin">Login</NavLink> </li>
       </ul>
     );
}
 
export default SignedoutLinks;