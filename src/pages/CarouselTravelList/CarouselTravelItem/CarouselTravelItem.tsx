import * as S from '@/pages/CarouselTravelList/CarouselTravelItem/CarouselTravelItem.styles';

export interface CarouselTravelItemProp {
	imageRef: React.RefObject<HTMLImageElement>;
	item: {
		title: string;
		price: number;
		image: string;
		link: string;
	};
	onHoverItem: (item: { title: string; price: number; image: string; link: string }) => void;
}

const CarouselTravelItem = ({ item, imageRef, onHoverItem }: CarouselTravelItemProp) => {
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
					<S.Image ref={imageRef} src={item.image} />
					<S.CarouselDescriptionBox>
						<S.TravelTitle aria-label={`목적지 ${item.title}`}>{item.title}</S.TravelTitle>
						<S.TravelSeat aria-label={'일반석 왕복'}>일반석-왕복</S.TravelSeat>
						<S.TravelPrice aria-label={`가격 ${item.price}원`}>
							{ConvertPrice(item.price)}~
						</S.TravelPrice>
					</S.CarouselDescriptionBox>
				</>
			</S.LinkItem>
		</S.CarouselItem>
	);
};

export default CarouselTravelItem;
