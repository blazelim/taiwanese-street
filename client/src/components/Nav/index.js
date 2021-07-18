import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    return(
        <ul className="nav-list">
            <li>Menu</li>
            <li>Order Now</li>
            <li>Location</li>
            <li>Our Story</li>
            <li>User</li>
            <li>Cart</li>
        </ul>
    )
  }

  return (
    <header className="header">
      <h1 className="company">
        Taiwanese Street
      </h1>

      <nav className="nav">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;