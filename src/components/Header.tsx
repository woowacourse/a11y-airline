import { Link } from "react-router-dom";

import PATH from "../constants/path";
import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link to={PATH.HOME}>홈</Link>
          </li>
          <li className="nav-list__item">
            <Link to={PATH.RESERVATION}>예약</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
