import React, { Component } from "react";
import logo from './../logo.jpg';
import { NavLink } from 'react-router-dom'
import profilelogo from "./../profileimg.jpeg";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
       <span className="float-class"> <NavLink to="/"><img src={logo} alt="logo" className="logo-img"/></NavLink> </span><a className="goneclass">G-One Tutorial</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
    </ul>
    <div className="form-inline my-2 my-lg-0">
    <img src={profilelogo} className="plogo-img" alt="profile" />
    <NavLink to="/about">             
    
    <p className="p-tag">About</p></NavLink> 
     <p className="p-tag">Contact</p>
      </div>
    </div>
      </nav>
    );
  }
}

export default Navbar;
