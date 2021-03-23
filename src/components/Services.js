import React from "react";
import { FaGithub, FaCamera, FaCircleNotch } from "react-icons/fa";

function Service() {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: "FaGithub",
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      id: 2,
      icon: "FaCamera",
      heading: "Photography",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      id: 3,
      icon: "FaCircleNotch",
      heading: "Web Design",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="services__content">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
        </div>

        <div className="row">
          {state.map((info) => (
            <div className="col-4 ">
              <div className="services__box">
                <FaGithub className="commonIcons" />
                <div className="services__box-header">{info.heading}</div>
                <div className="services__box-p">{info.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
