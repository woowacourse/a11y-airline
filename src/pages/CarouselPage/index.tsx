import Carousel from '../../components/Carousel';
import { infoList } from '../../data/dummy';
import S from './CarouselPage.module.css';

const CarouselPage = () => {
  return (
    <div className={S.layout}>
      <section className={S.box}>
        <Carousel cardInfoList={infoList} />
      </section>
    </div>
  );
};

export default CarouselPage;
