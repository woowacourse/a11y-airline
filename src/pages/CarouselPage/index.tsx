import Carousel from '../../components/Carousel';
import { infoList } from '../../data/dummy';
import S from './CarouselPage.module.css';

const CarouselPage = () => {
  return (
    <div className={S.layout}>
      <section className={S.box} aria-labelledby='TRIP_HD'>
        <h1 id='TRIP_HD'>지금 떠나기 좋은 여행</h1>
        <Carousel cardInfoList={infoList} />
      </section>
    </div>
  );
};

export default CarouselPage;
