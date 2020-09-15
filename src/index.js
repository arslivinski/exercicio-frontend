import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store/store.js';
import { Main } from './pages.js';
import './index.css';

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
