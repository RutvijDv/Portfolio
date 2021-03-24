import React from "react";

function About() {
  const [header] = React.useState({
    subHeading: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  });
  return (
    <div className="about">
      <div className="container">
        <div className="about__header">
          <div className="about__content">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-6">
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
          </div> */}
          <div className="col-6">
            <div className="banner__img">
              <img class="bimg" src="/images/me-01-alt.png" alt="man" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
