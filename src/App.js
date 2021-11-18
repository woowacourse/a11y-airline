import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import SpinButton from "./components/SpinButton";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/spinButton">스핀버튼</NavLink>
          </li>
          <li>
            <NavLink to="/carousel">캐러셀</NavLink>
          </li>
          <li>
            <NavLink to="/navigation">네비게이션</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <h1>접근성을 준수한 컴포넌트입니다.</h1>
        <p>스크린리더를 활용하여 사용해보세요</p>

        <Switch>
          <Route exact path="/spinButton">
            <SpinButton />
          </Route>
          <Route exact path="/carousel">
            <Carousel />
          </Route>
          <Route exact path="/navigation">
            <Navigation />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
