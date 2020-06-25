import React from 'react';
import projects from '../../data.json'
import './style.css';

function SingleProject(props) {
  return(
    <div>
      {projects.map(project => (
        <a href={project.image} data-id={project.id - 1} key={project.id} id={"project" + project.id}className="thumb-outer" onClick={(event) => props.getProjectDetails(event)}>
          <p className="image thumb">
            <img alt={project.title} src={process.env.PUBLIC_URL + "/assets/images/" + project.logo} />
          </p>
        </a>
      ))}
    </div>
  )
}

export default SingleProject