import './styles/index.css';
import PassengerControl from './components/PassengerControl';
import ItemCard from './components/ItemCard';

const App = () => {
  return (
    <>
      <h1>A11Y Airline</h1>
      <h2>지금 떠나기 좋은 여행</h2>
      <ul>
        <li>
          <ItemCard
            departure="ICN"
            destination="LAX"
            seat="Y"
            tripType="RT"
            price={1481800}
          />
        </li>
        <li>
          <ItemCard
            departure="ICN"
            destination="BCN"
            seat="Y"
            tripType="RT"
            price={1515200}
          />
        </li>
        <li>
          <ItemCard
            departure="ICN"
            destination="FUK"
            seat="Y"
            tripType="RT"
            price={340400}
          />
        </li>
        <li>
          <ItemCard
            departure="ICN"
            destination="HKT"
            seat="Y"
            tripType="RT"
            price={704100}
          />
        </li>
        <li>
          <ItemCard
            departure="ICN"
            destination="DXB"
            seat="Y"
            tripType="RT"
            price={1121600}
          />
        </li>
        <li>
          <ItemCard
            departure="ICN"
            destination="FRA"
            seat="Y"
            tripType="RT"
            price={1121600}
          />
        </li>
        <li>
          <ItemCard
            departure="ICN"
            destination="HGH"
            seat="Y"
            tripType="RT"
            price={704100}
          />
        </li>
        <li>
          <ItemCard
            departure="ICN"
            destination="DLI"
            seat="Y"
            tripType="RT"
            price={1121600}
          />
        </li>
      </ul>
      <h2>승객 선택</h2>
      <PassengerControl
        label="성인"
        description="국제선 만 12세 이상, 국내선 만 13세 이상"
      />
      <PassengerControl
        label="소아"
        description="국제선 만 12세 미만, 국내선 만 13세 미만"
      />
      <PassengerControl label="유아" description="만 2세 미만" />
    </>
  );
};

export default App;
