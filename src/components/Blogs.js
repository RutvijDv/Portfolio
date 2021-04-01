import React from "react";
import { FaBullhorn } from "react-icons/fa";

function Blogs() {
  const [header] = React.useState({
    mainHeader: "Blogs",
    subHeading: "Get In Touch With My WriteUps",
  });
  return (
    <div className="blogs">
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
      </div>
      <br />
      <br />
      <br />
      <h1 className="comingSoon">... Coming Soon ...</h1>
      {/* <img className="horn" src="/images/horn.jpg" alt="" /> */}
    </div>
  );
}

export default Blogs;
