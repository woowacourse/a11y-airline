import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTE from './constants/route';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import Mission1 from './pages/Mission1';

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path={ROUTE.HOME.PATH}>
          <Home />
        </Route>
        <Route exact path={ROUTE.MISSION1.PATH}>
          <Mission1 />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
