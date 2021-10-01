import React from "react";
import SpinButton from "./pages/SpinButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Carousel from "./pages/Carousel";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/spinbutton">SpinButton</Link>
            </li>
            <li>
              <Link to="/carousel">Carousel</Link>
            </li>
            <li>
              <Link to="/navigation">Navigation</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/spinbutton">
            <SpinButton />
          </Route>
          <Route path="/carousel">
            <Carousel />
          </Route>
          <Route path="/navigation">
            <Navigation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
