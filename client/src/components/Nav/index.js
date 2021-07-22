import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a className='logout' href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <li><Link to="/signup" className="link">Signup</Link></li>
          <li><Link to="/login" className="link">Login</Link></li>
        </div>
      );
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
          <li><Link className="link cart" to="/cart">&#128722;</Link></li>
          <li>{showNavigation()}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;