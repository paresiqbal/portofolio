import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../style/Projects.css";

function Project() {
  return (
    <div className="projects">
      <h1>Personal Project</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
