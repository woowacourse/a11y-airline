import { NextPage } from 'next';
import Carousel from '../../components/Carousel';
import TravelItem from '../../components/TravelItem';
import { TRAVEL_DATA } from '../../data';

const Mission2: NextPage = () => {
  return (
    <section>
      <h2>지금 떠나기 좋은 여행</h2>
      <Carousel moveAmount={320}>
        {TRAVEL_DATA.map((travelItem) => (
          <TravelItem key={travelItem.id} travelItem={travelItem} />
        ))}
      </Carousel>
    </section>
  );
};

export default Mission2;
