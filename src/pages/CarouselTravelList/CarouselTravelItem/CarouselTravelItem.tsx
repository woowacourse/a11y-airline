import * as S from '@/pages/CarouselTravelList/CarouselTravelItem/CarouselTravelItem.styles';

export interface CarouselTravelItemProp {
	item: {
		title: string;
		price: number;
		image: string;
		link: string;
	};
}

const CarouselTravelItem = ({ item }: CarouselTravelItemProp) => {
	const ConvertPrice = (price: number) => {
		const commaPrice = price.toLocaleString('ko-KR', {
			style: 'currency',
			currency: 'KRW',
		});
		return commaPrice;
	};
	return (
		<S.CarouselItem>
			<S.LinkItem href={item.link}>
				<>
					<S.Image src={item.image} alt={`${item.title} 의 사진입니다`} />
					<S.CarouselDescriptionBox>
						<S.TravelTitle>{item.title}</S.TravelTitle>
						<S.TravelSeat>일반석-왕복</S.TravelSeat>
						<S.TravelPrice>{ConvertPrice(item.price)}~</S.TravelPrice>
					</S.CarouselDescriptionBox>
				</>
			</S.LinkItem>
		</S.CarouselItem>
	);
};

export default CarouselTravelItem;
