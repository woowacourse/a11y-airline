import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from "./components/Header";
import PATH from "./constants/path";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={PATH.HOME}>
          <Home />
        </Route>
        <Route exact path={PATH.RESERVATION}>
          <Reservation />
        </Route>
        <Redirect to={PATH.HOME} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
