import React from "react";
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, type, tools, languageLabel, image, repoLink }) => {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-card-image" />
        <h2>{title}</h2>
        <p>{type}</p>
        <p>{tools}</p>
        <p>{languageLabel}</p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    );
  };

export default ProjectCard;