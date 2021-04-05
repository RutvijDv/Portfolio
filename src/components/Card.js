import React from "react";

function Card(props) {
  var colorPalette = {
    React: "blue",
    NodeJS: "green",
    MongoDB: "yellow",
    npm: "grey",
    Express: "orange",
    ChromeApi: "purple",
    JavaScript: "red",
    Python: "yellow",
    Tensorflow: "orange",
  };
  var tech = [];
  props.tools.forEach((tool) => {
    var color = colorPalette[`${tool}`];
    tech.push(<div className={`tool ${color}`}>{tool}</div>);
  });
  return (
    <div className="col-lg-4 col-md-6">
      <div className="projects__box">
        <div className="projects__icons">
          <div className="icon">{props.children}</div>
        </div>
        <div className="projects__box-header">{props.heading}</div>
        <div className="projects__box-p">{props.text}</div>
        <div className="stack">{tech}</div>
      </div>
    </div>

    // <div className="col-lg-4 col-md-6">
    //   <div class="card" style={{ width: "18rem" }}>
    //     {props.children}
    //     {/* <img src="..." class="card-imcolor: "red"}}g-top" alt="..." /> */}
    //     <div class="card-body">
    //       <h5 class="card-title">Web Development</h5>
    //       <p class="card-text">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <a href="#." class="btn btn-primary">
    //         Go somewhere
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
