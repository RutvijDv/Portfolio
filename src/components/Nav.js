import React from "react";
import { FaBars } from "react-icons/fa";

function Nav() {
  return (
    // <nav className="navbar">
    //   <div className="container">
    //     <div className="navbar__container">
    //       <ul className="navbar__left">
    //         <div className="navbar__left-logo">
    //           <img class="logo" src="/images/logo.png" alt="logo"></img>
    //         </div>
    //       </ul>
    //       <ul className="navbar__right">
    //         <li>
    //           <Link to="/">HOME</Link>
    //         </li>
    //         <li>
    //           <Link to="/Services">SERVICES</Link>
    //         </li>
    //         <li>
    //           <Link to="/About">ABOUT</Link>
    //         </li>
    //         <li>
    //           <Link to="/Skills">SKILLS</Link>
    //         </li>
    //         <li>
    //           <Link to="/Portfolio">PORTFOLIO</Link>
    //         </li>
    //         <li>
    //           <Link to="/Blog">BLOG</Link>
    //         </li>
    //         <li>
    //           <Link to="/Content">CONTENT</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <h1 className="logo">Rutvij Vamja</h1>
        </a>
        <button
          class="navbar-toggler btn-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="btn-menu__bars"></i>
          <span class="sr-only" style={{ color: "#000000" }}></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/Projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#.">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Timeline">
                TimeLine
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">
                Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#.">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
