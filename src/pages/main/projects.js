import React from 'react';
import { Card } from '../../components.js';
import { useFetch } from '../../hooks.js';
import { Project } from './project.js';
import { ProjectFeatured } from './project-featured.js';
import './projects.css';

/**
 * @returns {JSX.Element}
 */
function Projects() {
  const { status, error, ...response } = useFetch('http://localhost:3000/projects');
  /** @type {Array<import('../models/project.js').Project>} */
  const projects = response.data;
  let content;

  switch (status) {
    case useFetch.Status.LOADING: {
      content = 'Loading...';
      break;
    }
    case useFetch.Status.ERROR: {
      content = error?.message ?? 'Error while loading the Projects :(';
      break;
    }
    case useFetch.Status.DONE:
    default: {
      content = projects.map((project, index) => {
        if (index === 0) {
          return (
            <React.Fragment key="featured">
              <ProjectFeatured key={project.id} project={project} />
              <hr key="separator" className="jl-projects__separator" />
            </React.Fragment>
          );
        }
        return <Project key={project.id} project={project} />;
      });
    }
  }

  return (
    <Card id="latest-projects" title="Latest Projects">
      <div className="jl-projects">{content}</div>
    </Card>
  );
}

export { Projects };
