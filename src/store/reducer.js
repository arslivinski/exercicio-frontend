import { combineReducers } from 'redux';
import { projectsReducer } from './projects/projects-reducer.js';

const reducer = combineReducers({ projects: projectsReducer });

export { reducer };
