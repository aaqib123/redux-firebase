import React, { Component } from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title ">{id} Project Title</span>
            <p>
              asdssssssssssssssssssssssss asdas afsadsada a dsad asd asda ased
              asd
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by aaqib</div>
            <div>2nd sept, 1am</div>
          </div>
        </div>
      </div>
    );
}

export default ProjectDetails;
