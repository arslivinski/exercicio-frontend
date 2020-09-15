import { ProjectsActionTypes } from './projects-actions.js';

/**
 * @typedef ProjectState
 * @type {Object}
 * @property {Array<import('../../models/project.js').Project>} projects
 * @property {boolean} isLoading
 */

/**
 * @type {ProjectState}
 */
const initialState = {
  isLoading: false,
  projects: [],
};

/**
 * @param {ProjectState} state
 * @param {{ type: ProjectsActionTypes, payload: any }} action
 * @returns {ProjectState}
 */
function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case ProjectsActionTypes.PROJECTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProjectsActionTypes.PROJECTS_RECEIVE: {
      return {
        ...state,
        isLoading: false,
        projects: action.projects,
      };
    }
    default: {
      return state;
    }
  }
}

export { projectsReducer };
