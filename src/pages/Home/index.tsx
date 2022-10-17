import { Link } from "react-router-dom";

function Home() {
  return (
    <ul>
      <li>
        <Link to="/passenger">passengerCount 미션</Link>
      </li>
      <li>
        <Link to="/carousel">carousel 미션</Link>
      </li>
    </ul>
  );
}

export default Home;
