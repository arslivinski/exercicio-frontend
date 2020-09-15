import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Link } from '../../components.js';
import './project.css';

/**
 * @typedef ProjectProps
 * @type {Object}
 * @property {import('../../models/project.js').Project} project
 */

/**
 * @param {ProjectProps} props
 * @returns {JSX.Element}
 */
function Project(props) {
  const { project } = props;

  return (
    <article id={`project_${project.id}`} className="jl-project">
      <aside className="jl-project__image">
        <img src={`/img/${project.picture}`} alt={project.title} />
      </aside>
      <section>
        <header>
          <h3 className="jl-project__title">{project.title}</h3>
        </header>
        <p>{project.description}</p>
        <Link id={`project_${project.id}`} to={project.url}>
          <Icon name="open-in-new" size="small" color="green" />
          Find out more
        </Link>
      </section>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export { Project };
