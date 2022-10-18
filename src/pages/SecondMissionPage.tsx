import Carousel from '../components/Carousel/Carousel';

import TRAVEL_PRODUCT_LIST from '../dummy';

const SecondMissionPage = () => {
  return (
    <div>
      <h1>지금 떠나기 좋은 여행</h1>
      <Carousel items={TRAVEL_PRODUCT_LIST} itemSize="middle" />
    </div>
  );
};

export default SecondMissionPage;
