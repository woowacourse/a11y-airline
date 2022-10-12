import { travelInfo } from '@/constant/imageInfo';
import * as S from '@/pages/CarouselTravelList/index.styles';
import CarouselTravelItem from '@/pages/CarouselTravelList/CarouselTravelItem/CarouselTravelItem';

const CarouselTravelList = () => {
	return (
		<S.Container>
			<S.Title>지금 떠나기 좋은 여행</S.Title>
			<S.CarouselContainer>
				{travelInfo.map((item) => (
					<CarouselTravelItem item={item} key={item.title} />
				))}
				<S.CarouselButtonContainer>
					<S.CarouselButton>
						<S.LeftButton />
					</S.CarouselButton>
					<S.CarouselButton>
						<S.RightButton />
					</S.CarouselButton>
				</S.CarouselButtonContainer>
			</S.CarouselContainer>
		</S.Container>
	);
};
export default CarouselTravelList;
