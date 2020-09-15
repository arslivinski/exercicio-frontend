import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../../components.js';
import * as ProjectsSelectors from '../../store/projects/projects-selectors.js';
import * as ProjectsActions from '../../store/projects/projects-actions.js';
import { Project } from './project.js';
import { ProjectFeatured } from './project-featured.js';
import './projects.css';

/**
 * @typedef ProjectsProps
 * @type {Object}
 * @property {Array<import('../../models/project.js').Project>} projects
 * @property {boolean} isLoading
 * @property {() => void} fetchProjects
 */

/**
 * @param {ProjectsProps} props
 * @returns {JSX.Element}
 */
function Projects(props) {
  const { projects, isLoading, fetchProjects } = props;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchProjects();
  }, []);
  /* eslint-enable */

  if (isLoading) {
    return (
      <Card id="latest-projects" title="Latest Projects">
        Loading...
      </Card>
    );
  }

  return (
    <Card id="latest-projects" title="Latest Projects">
      <div className="jl-projects">
        {projects.map((project, index) => {
          if (index === 0) {
            return (
              <React.Fragment key="featured">
                <ProjectFeatured key={project.id} project={project} />
                <hr key="separator" className="jl-projects__separator" />
              </React.Fragment>
            );
          }
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </Card>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchProjects: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    projects: ProjectsSelectors.getProjects(state),
    isLoading: ProjectsSelectors.isLoading(state),
  };
}

const mapDispatchToProps = {
  fetchProjects: ProjectsActions.fetchProjects,
};

const ConnectedProjects = connect(mapStateToProps, mapDispatchToProps)(Projects);

export { ConnectedProjects as Projects };
