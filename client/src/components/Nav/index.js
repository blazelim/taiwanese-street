import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      <>
        <li><Link className="link" to="/logout">Log out</Link></li>
      </>
    } else {
      return (
        <>
          <li><Link className="link" to="/login">Login</Link></li>
          <li><Link className="link" to="/signup">Signup</Link></li>
        </>
      )
    }
  }

  return (
    <header className="header">
      <h1 className="company">
        Fried Snacks Diner
      </h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link className="link" to="/">Menu</Link></li>
          <li><Link className="link" to="/order">Order now</Link></li>
          <li><Link className="link" to="/location">Location</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          {showNavigation()}
          <li><Link className="link cart" to="/cart">&#128722;</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;