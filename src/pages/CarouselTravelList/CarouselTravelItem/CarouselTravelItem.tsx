import * as S from '@/pages/CarouselTravelList/CarouselTravelItem/CarouselTravelItem.styles';

export interface CarouselTravelItemProp {
	item: {
		title: string;
		price: number;
		image: string;
		link: string;
	};
	onHoverItem: (item: { title: string; price: number; image: string; link: string }) => void;
}

const CarouselTravelItem = ({ item, onHoverItem }: CarouselTravelItemProp) => {
	const ConvertPrice = (price: number) => {
		const commaPrice = price.toLocaleString('ko-KR', {
			style: 'currency',
			currency: 'KRW',
		});
		return commaPrice;
	};
	return (
		<S.CarouselItem>
			<S.LinkItem
				href={item.link}
				onMouseOver={(e) => {
					onHoverItem(item);
				}}
			>
				<>
					<S.Image src={item.image} alt={`${item.title} 의 사진입니다`} />
					<S.CarouselDescriptionBox>
						<S.TravelTitle aria-label="여행지">{item.title}</S.TravelTitle>
						<S.TravelSeat aria-label="좌석">일반석-왕복</S.TravelSeat>
						<S.TravelPrice aria-label="가격">{ConvertPrice(item.price)}~</S.TravelPrice>
					</S.CarouselDescriptionBox>
				</>
			</S.LinkItem>
		</S.CarouselItem>
	);
};

export default CarouselTravelItem;
