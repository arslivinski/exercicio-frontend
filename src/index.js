import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './pages.js';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
