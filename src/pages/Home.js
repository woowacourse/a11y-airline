import React from 'react';
import { Link } from 'react-router-dom';
import ROUTE from '../constants/route';

const Home = () => (
  <section>
    <h1>누구나 접근할 수 있는 항공사 웹사이트</h1>
    <nav>
      <Link to={ROUTE.MISSION1.PATH}>Mission 1</Link>
    </nav>
  </section>
);

export default Home;
