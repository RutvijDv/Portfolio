import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Typed from "react-typed";
import Particles from "react-particles-js";

function Banner() {
  return (
    <div className="banner">
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: { enabled: true, value_area: 9000 },
            },
            color: { value: "#000" },
            shape: {
              type: "circle",
              stroke: { width: 2, color: "#000" },
            },
          },
        }}
      /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 mobile">
            <div className="banner__img">
              <img class="bimg" src="/images/man-02.png" alt="man" />
            </div>
          </div>
          <div className="col-md-6">
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
                <h1>
                  <Typed strings={["Hey, I'm Rutvij"]} typeSpeed={59} />
                </h1>

                <p>I would rather love to code than Flying a kite Uhh!!.</p>
                <div className="header__buttons">
                  <a href="#." class="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#." class="btn btn-smart">
                    <FaPlay />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 bannerImg">
            <div className="banner__img">
              <img class="bimg" src="/images/man-02.png" alt="man" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
