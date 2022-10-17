import { useEffect, useRef, useState } from 'react';

const useHandleCarouselEvent = () => {
	const carouselListRef = useRef<HTMLUListElement>(null);
	const carouselImgItem = useRef<HTMLImageElement>(null);
	const title = useRef<HTMLHeadingElement>(null);

	const [travelDescription, setTravelDescription] = useState('');
	const [buttonState, setButtonState] = useState('');

	useEffect(() => {
		if (title.current) {
			title.current.focus();
		}
	}, []);

	const onLeftSlideButtonClick = () => {
		if (!carouselListRef.current || !carouselImgItem.current) {
			return;
		}
		if (carouselListRef.current.scrollLeft === 0) {
			setButtonState('이전 버튼 (사용중지) ');
			return;
		}
		const elementWidth = carouselImgItem.current.clientWidth + 20;
		carouselListRef.current.scrollBy({ top: 0, left: -elementWidth, behavior: 'smooth' });
		setButtonState('이전 버튼');
	};

	const onRightSlideButtonClick = () => {
		if (!carouselListRef.current || !carouselImgItem.current) {
			return;
		}
		if (
			carouselListRef.current.scrollWidth -
				carouselListRef.current.clientWidth -
				carouselListRef.current.scrollLeft <=
			1
		) {
			setButtonState('다음 버튼 (사용중지)');
			return;
		}
		const elementWidth = carouselImgItem.current.clientWidth + 20;
		carouselListRef.current.scrollBy({ top: 0, left: elementWidth, behavior: 'smooth' });
		setButtonState('다음 버튼');
	};

	const onHoverItem = (item: { title: string; price: number; image: string; link: string }) => {
		setTravelDescription(`
			여행지 ${item.title}의 가격은 ${item.price}입니다
		`);
	};

	return {
		carouselListRef,
		carouselImgItem,
		title,
		travelDescription,
		buttonState,
		onLeftSlideButtonClick,
		onRightSlideButtonClick,
		onHoverItem,
	};
};

export default useHandleCarouselEvent;
