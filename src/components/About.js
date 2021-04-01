import React from "react";

function About() {
  const [header] = React.useState({
    mainHeader: "About Me",
    subHeading: "@RutvijDv",
  });

  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Jonathan Doe" },
    { id: 2, title: "Email:", text: "example" },
    { id: 3, title: "Phone:", text: "+1 023 454 345" },
    { id: 4, title: "Linkedin", text: "Jonathan_123" },
  ]);

  return (
    <div className="about">
      <div className="container">
        <div className="projects__header">
          <div className="projects__content">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="common">
              <div className="commonDot"></div>
              <div className="commonBorder"></div>
            </div>
          </div>
        </div>

        <div className="row  h-650 alignCenter">
          <div className="col-lg-6">
            <div className="about__img">
              <img className="aimg" src="/images/me-01-alt.png" alt="man" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="about__info-p2">
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </div>
              <div className="info__contacts">
                <div className="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
