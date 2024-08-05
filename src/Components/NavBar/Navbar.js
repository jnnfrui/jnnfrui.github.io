// src/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Assets/orange-logo.svg";

const NavBar = () => {
  return (
    <nav>
      <ul style={{ margin: "0" }}>
        <li>
          <Link to="/">
            <img src={Logo} alt="logo" width={50} />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/experience">experience</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
