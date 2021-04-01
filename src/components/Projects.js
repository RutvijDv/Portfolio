import React from "react";
import { FaGithub, FaCamera, FaCircleNotch } from "react-icons/fa";
import Card from "./Card.js";

function Project() {
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "Glimpse Of My Work",
    text: "Make it work, make it right, make it fast",
    author: " ~ Kent Beck",
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
    <div className="projects">
      <div className="container">
        <div className="projects__header">
          <div className="projects__content">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <p className="author">{header.author}</p>
            <div className="common">
              <div className="commonDot"></div>
              <div className="commonBorder"></div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <Card>
            <FaGithub className="commonIcons" />
          </Card>
          <Card>
            <FaGithub className="commonIcons" />
          </Card>
          <Card>
            <FaGithub className="commonIcons" />
          </Card>
          <Card>
            <FaGithub className="commonIcons" />
          </Card>
          <Card>
            <FaGithub className="commonIcons" />
          </Card>
        </div> */}

        <div className="row">
          <Card heading={state[0].heading} text={state[0].text}>
            <FaGithub className="commonIcons" />
          </Card>
          <Card heading={state[0].heading} text={state[0].text}>
            <FaGithub className="commonIcons" />
          </Card>
          <Card heading={state[0].heading} text={state[0].text}>
            <FaGithub className="commonIcons" />
          </Card>
          <Card heading={state[0].heading} text={state[0].text}>
            <FaGithub className="commonIcons" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
