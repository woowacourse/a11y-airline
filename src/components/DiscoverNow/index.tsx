import { trips } from '../../dummy';
import Carousel from '../Carousel';
import * as S from './index.style';

const DiscoverNow = () => {
  return (
    <S.Container>
      <Carousel title="지금 떠나기 좋은 여행" items={trips} />
    </S.Container>
  );
};

export default DiscoverNow;
