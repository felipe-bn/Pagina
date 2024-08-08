import React, { forwardRef } from "react";
import '../Assets/Styles/ProjectsPageStyles.css';

const ProjectsPage = forwardRef((props, ref) => {
  return (
    <main className="main" id="projects" ref={ref}>
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
      <span>In process..</span>
    </main>
  );
});

export default ProjectsPage;