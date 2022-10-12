import { travelInfo } from '@/constant/imageInfo';
import * as S from '@/pages/CarouselTravelList/index.styles';
import CarouselTravelItem from '@/pages/CarouselTravelList/CarouselTravelItem/CarouselTravelItem';
import useHandleCarouselEvent from '@/hooks/useHandleCarouselEvent';

const CarouselTravelList = () => {
	const {
		carouselListRef,
		travelDescription,
		onLeftSlideButtonClick,
		onRightSlideButtonClick,
		onHoverItem,
	} = useHandleCarouselEvent();
	return (
		<S.Container>
			<S.Title>지금 떠나기 좋은 여행</S.Title>
			<S.CarouselBox>
				<S.CarouselContainer ref={carouselListRef}>
					{travelInfo.map((item) => (
						<CarouselTravelItem item={item} key={item.title} onHoverItem={onHoverItem} />
					))}
				</S.CarouselContainer>
				<S.CarouselButtonContainer>
					<S.CarouselButton aria-label="이전 여행지 보기" onClick={onLeftSlideButtonClick}>
						<S.LeftButton />
					</S.CarouselButton>
					<S.CarouselButton aria-label="다른 여행지 보기" onClick={onRightSlideButtonClick}>
						<S.RightButton />
					</S.CarouselButton>
				</S.CarouselButtonContainer>
			</S.CarouselBox>
			<S.Description aria-live="assertive">{travelDescription}</S.Description>
		</S.Container>
	);
};
export default CarouselTravelList;
