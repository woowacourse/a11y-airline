import { useRef, useState } from 'react';

const useHandleCarouselEvent = () => {
	const carouselListRef = useRef<HTMLUListElement | null>(null);
	const [travelDescription, setTravelDescription] = useState('');

	const onLeftSlideButtonClick = () => {
		if (!carouselListRef.current) {
			return;
		}
		const elementWidth = carouselListRef.current.clientWidth / 4;
		carouselListRef.current.scrollBy({ top: 0, left: -elementWidth, behavior: 'smooth' });
	};

	const onRightSlideButtonClick = () => {
		if (!carouselListRef.current) {
			return;
		}
		const elementWidth = carouselListRef.current.clientWidth / 4;
		carouselListRef.current.scrollBy({ top: 0, left: elementWidth, behavior: 'smooth' });
	};

	const onHoverItem = (item: { title: string; price: number; image: string; link: string }) => {
		setTravelDescription(`
			여행지 ${item.title}의 가격은 ${item.price}입니다
		`);
	};

	return {
		carouselListRef,
		travelDescription,
		onLeftSlideButtonClick,
		onRightSlideButtonClick,
		onHoverItem,
	};
};

export default useHandleCarouselEvent;
