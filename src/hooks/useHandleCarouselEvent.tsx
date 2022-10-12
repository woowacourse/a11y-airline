import { useRef } from 'react';

const useHandleCarouselEvent = () => {
	const carouselListRef = useRef<HTMLUListElement | null>(null);

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

	return {
		carouselListRef,
		onLeftSlideButtonClick,
		onRightSlideButtonClick,
	};
};

export default useHandleCarouselEvent;
