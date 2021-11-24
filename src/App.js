import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import SpinButton from "./components/SpinButton";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import styled from "@emotion/styled";

const App = () => {
  return (
    <BrowserRouter>
      <Nav>
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
      </Nav>

      <Main>
        <h1>티케의 a11y-airline 미션</h1>
        <p>
          <span role="img" aria-label="체크 이모지" aria-hidden="true">
            ✅
          </span>
          스크린리더를 활용하여 사용해보세요
        </p>

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
      </Main>
    </BrowserRouter>
  );
};

export default App;

const Nav = styled.nav`
  width: 100%;
  margin: 2rem 0;

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 1rem;

      a {
        padding: 0.8rem;

        border: 0.15rem solid #333333;
        border-radius: 0.5rem;

        :focus {
          background-color: #333333;
          color: #ffffff;
        }
      }
    }
  }
`;

const Main = styled.main`
  width: 100%;

  text-align: center;

  p {
    margin: 1rem 0;
  }
`;
