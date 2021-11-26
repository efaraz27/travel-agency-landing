import React from "react";
import Logo from "../assets/Logo.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navlinks">
        <div className="navlink"><span>Destinations</span></div>
        <div className="navlink"><span>Hotels</span></div>
        <div className="navlink"><span>Flights</span></div>
        <div className="navlink"><span>Bookings</span></div>
        <div className="navlink"><span>Login</span></div>
        <div className="navlink signup">Sign up</div>
        <div className="navlink"><span>EN</span></div>
      </div>
    </div>
  );
}

export default Navbar;
