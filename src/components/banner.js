import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function Banner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="header__content">
            <div className="header__section">
              <ul className="head__ul">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaPinterestP />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>
              <h1>I am Rutvij Vamja</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="header__buttons">
                <a href="#" class="btn btn-outline">
                  My Portfolio
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" class="btn btn-smart">
                  <FaPlay />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="banner__img">
            <img class="bimg" src="/images/man-01.png" alt="man" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
