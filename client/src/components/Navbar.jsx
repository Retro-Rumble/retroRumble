import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/snake">
          Snake
        </NavLink>
        <NavLink className="navlink" to="/tictactoe">
          TicTacToe
        </NavLink>
        <NavLink className="navlink" to="/hangman">
          Hangman
        </NavLink>
        {/* <NavLink className="navlink" to="/login">
          Login
        </NavLink> */}
      </nav>
    </>
  );
};

export default NavBar;
