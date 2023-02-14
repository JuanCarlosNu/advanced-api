import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import decode from 'jwt-decode'

const Navbar = () => {
let name;

  try{
    const token = localStorage.getItem('token')
     name = decode(token) }
     catch(error){

     }


 

  return (
    <nav>
      <h1>{name && name.username + " " + ":"} </h1>
         <ul className="list">
        <li className="item">
          <NavLink className="link" to="/home">
            Home
          </NavLink>
        </li>

        {
        !name ?
        <React.Fragment>
        <li className="item">
          <NavLink className="link" to="/login">
            LogIn
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/signup">
            SignUp
          </NavLink>
        </li>
        </React.Fragment>
        : null}
        <li className="item">
          <NavLink className="link" to="/logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
