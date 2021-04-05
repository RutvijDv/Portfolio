import React from "react";
import { FaFacebookF, FaTag } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Typed from "react-typed";
import Particles from "react-particles-js";

function Banner() {
  const [Tag] = React.useState({
    p: "< p >",
    pClose: "< / p >",
  });
  return (
    <div className="banner">
      <Particles
        params={{
          particles: {
            number: {
              value: 70,
              density: { enabled: true, value_area: 10000 },
            },
            color: { value: "#000" },
            shape: {
              type: "circle",
              stroke: { width: 2, color: "#000" },
            },
            line_linked: {
              color: "#000",
              opacity: 0.1,
            },
          },
        }}
      />
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
                    <a href="##">
                      <FaGithub size="27px" className="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <FaTwitter size="27px" className="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <FaGoogle size="27px" className="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <FaFacebookF size="27px" className="icon" />
                    </a>
                  </li>

                  {/* <li>
                    <a href="##">
                      <FaLinkedinIn size="18px" className="icon" />
                    </a>
                  </li> */}
                </ul>
                <h1>
                  <Typed strings={["Hey, I'm Rutvij"]} typeSpeed={59} />
                </h1>
                <div className="tag">
                  <span>{Tag.p}</span>
                </div>

                <p>I would rather love to code than flying a kite Uhh!!.</p>
                <div className="tag">
                  <span>{Tag.pClose}</span>
                </div>

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
