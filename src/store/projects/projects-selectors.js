/**
 * @param {{ projects: import('./projects-reducer.js').ProjectState}} store
 * @returns {import('./projects-reducer.js').ProjectState}
 */
function getState(store) {
  return store.projects;
}

/**
 * @returns {Array<import('../../models/project.js').Project>}
 */
function getProjects(store) {
  return getState(store).projects;
}

/**
 * @returns {boolean}
 */
function isLoading(store) {
  return getState(store).isLoading;
}

export { getProjects, isLoading };
