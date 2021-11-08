import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { SpinButton } from '../pages';

const App = () => (
  <>
    <h1>누구나 접근할 수 있는 항공사 웹사이트 🚀</h1>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/spin-button">SPIN BUTTON</Link>
          </li>
          <li>
            <Link to="carousel">CAROUSEL</Link>
          </li>
          <li>
            <Link to="navigation">NAVIGATION</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/spin-button">
          <SpinButton />
        </Route>
        <Route path="/carousel">캐로셀</Route>
        <Route path="/navigation">네비게이션</Route>
      </Switch>
    </Router>
  </>
);
export default App;
