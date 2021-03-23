import React from "react";

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
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">SKILLS</a>
            </li>
            <li>
              <a href="">PORFOLIO</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">CONTENT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
