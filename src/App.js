import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SpinButton } from './components';
import PATH from './constants/path';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={PATH.SPIN_BUTTON} component={SpinButton} />
    </Switch>
  </BrowserRouter>
);

export default App;
