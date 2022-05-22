import { Button } from "@mui/material";
import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/" style={{ textDecoration: 'none' }}><div className="logoContainer">
          <img src="./assets/logo.png" alt="logo"/>
        </div></NavLink>
        <div className="navbarBtn">
          <NavLink to="/about" style={{ textDecoration: 'none' }}><Button className="btnNav" variant="outlined">
            About
          </Button></NavLink>
          <NavLink to="/portfolio" style={{ textDecoration: 'none' }}><Button className="btnNav" variant="outlined">
            Portfolio
          </Button></NavLink>
          <NavLink to="/contact" style={{ textDecoration: 'none' }}><Button className="btnNav" variant="outlined">
            Contact
          </Button></NavLink>
        </div>
      </div>
    </>
  );
};
