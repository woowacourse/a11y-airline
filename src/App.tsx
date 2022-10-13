import './styles/index.css';
import PassengerControl from './components/PassengerControl';
import ItemCard from './components/ItemCard';
import { recommendations } from './mocks/dummy';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <>
      <h1>A11Y Airline</h1>
      <h2>지금 떠나기 좋은 여행</h2>
      <Carousel>
        {recommendations.map((recommendation) => (
          <ItemCard key={recommendation.id} {...recommendation} />
        ))}
      </Carousel>
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
