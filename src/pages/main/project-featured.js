import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Paragraph } from '../../components.js';
import './project-featured.css';

/**
 * @typedef ProjectFeaturedProps
 * @type {Object}
 * @property {import('../../models/project.js').Project} project
 */

/**
 * @param {ProjectFeaturedProps} props
 * @returns {JSX.Element}
 */
function ProjectFeatured(props) {
  const { project } = props;

  return (
    <article id="project-featured" className="jl-project-featured">
      <header className="jl-project-featured__header">
        <h3 className="jl-project-featured__title">{project.title}</h3>
        <span className="jl-project-featured__subtitle">{project.subtitle}</span>
      </header>
      <img
        className="jl-projectt-featured__image"
        src={`/img/${project.picture}`}
        alt={project.title}
      />
      <Paragraph>{project.description}</Paragraph>
      <footer className="jl-project-featured__footer">
        <Button id="find-out-more" link={project.url} color="blue">
          <Icon name="thumb-up-outline" color="white" /> Back my project
        </Button>
      </footer>
    </article>
  );
}

ProjectFeatured.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export { ProjectFeatured };
