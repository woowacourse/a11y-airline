import { NavLink } from "react-router-dom";
import PATH from "../constants/path";

const Home = () => (
  <>
    <h1>🚀 항공사 웹사이트의 컴포넌트 접근성 높이기</h1>
    <NavLink to={PATH.SPIN_BUTTON}>
      요구 사항 1 - Spin Button: 승객수 입력하기
    </NavLink>
  </>
);

export default Home;
