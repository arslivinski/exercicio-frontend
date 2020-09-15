import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer } from './reducer.js';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export { store };
