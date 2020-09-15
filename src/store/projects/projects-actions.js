/**
 * @enum {string}
 */
const ProjectsActionTypes = Object.freeze({
  PROJECTS_REQUEST: 'PROJECTS_REQUEST',
  PROJECTS_RECEIVE: 'PROJECTS_RECEIVE',
});

function projectsRequest() {
  return {
    type: ProjectsActionTypes.PROJECTS_REQUEST,
  };
}

function projectsReceive(projects) {
  return {
    type: ProjectsActionTypes.PROJECTS_RECEIVE,
    projects,
  };
}

function fetchProjects() {
  return function (dispatch) {
    dispatch(projectsRequest());

    return fetch('http://localhost:3000/projects')
      .then((response) => {
        if (response.status >= 400) {
          const error = new Error(`${response.status}: ${response.statusText}`);
          error.status = response.status;
          error.statusText = response.statusText;
          throw error;
        }

        return response.json();
      })
      .then((projects) => {
        dispatch(projectsReceive(projects));
      });
  };
}

export { ProjectsActionTypes, fetchProjects };
