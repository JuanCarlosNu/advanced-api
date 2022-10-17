import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="list">
        <li className="item">
          <NavLink className="link" to="/home">
            Home
          </NavLink>
        </li>

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
      </ul>
    </nav>
  );
};

export default Navbar;
