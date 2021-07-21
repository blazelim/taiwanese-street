import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    return (
      <ul className="nav-list">
        <li><Link className="link" to="/">Menu</Link></li>
        <li><Link className="link" to="/order">Order now</Link></li>
        <li><Link className="link" to="/location">Location</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><Link className="link" to="/login">Login</Link></li>
        <li><Link className="link" to="/signup">Signup</Link></li>
        <li><Link className="link cart" to="/cart">&#128722;</Link></li>
      </ul>
    )
  }

  return (
    <header className="header">
      <h1 className="company">
        Fried Snacks Diner
      </h1>
      <nav className="nav">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;