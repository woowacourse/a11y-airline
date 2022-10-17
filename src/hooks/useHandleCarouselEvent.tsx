import { useRef, useState } from 'react';

const useHandleCarouselEvent = () => {
	const carouselListRef = useRef<HTMLUListElement>(null);
	const carouselImgItem = useRef<HTMLImageElement>(null);
	const [travelDescription, setTravelDescription] = useState('');

	const onLeftSlideButtonClick = () => {
		if (!carouselListRef.current || !carouselImgItem.current) {
			return;
		}
		const elementWidth = carouselImgItem.current.clientWidth + 20;
		console.log(elementWidth);
		carouselListRef.current.scrollBy({ top: 0, left: -elementWidth, behavior: 'smooth' });
	};

	const onRightSlideButtonClick = () => {
		if (!carouselListRef.current || !carouselImgItem.current) {
			return;
		}
		const elementWidth = carouselImgItem.current.clientWidth + 20;
		carouselListRef.current.scrollBy({ top: 0, left: elementWidth, behavior: 'smooth' });
	};

	const onHoverItem = (item: { title: string; price: number; image: string; link: string }) => {
		setTravelDescription(`
			여행지 ${item.title}의 가격은 ${item.price}입니다
		`);
	};

	return {
		carouselListRef,
		carouselImgItem,
		travelDescription,
		onLeftSlideButtonClick,
		onRightSlideButtonClick,
		onHoverItem,
	};
};

export default useHandleCarouselEvent;
