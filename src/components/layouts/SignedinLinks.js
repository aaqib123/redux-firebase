import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const SignedinLinks = () => {
    return ( 
       <ul  className="right">
        <li><NavLink to="/create">New Project</NavLink> </li>
        <li><NavLink to="/logout">Logout</NavLink> </li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink> </li>
       </ul>
     );
}
 
export default SignedinLinks;