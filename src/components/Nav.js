import React from "react";
import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img class="logo" src="/images/logo.png" alt="logo"></img>
            </div>
          </ul>
          <ul className="navbar__right">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Services">SERVICES</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">SKILLS</Link>
            </li>
            <li>
              <Link to="/">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/">BLOG</Link>
            </li>
            <li>
              <Link to="/">CONTENT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
