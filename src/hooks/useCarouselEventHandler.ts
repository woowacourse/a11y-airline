import { useRef, useState } from "react";

interface UseCarouselEventHandlerResult {
  isDisabledScrollToLeftButton: boolean;
  isDisabledScrollToRightButton: boolean;
  carouselListRef: React.RefObject<HTMLDivElement>;
  handleSetScrollToButtons: () => void;
  handleCarouselContainerScrollToLeft: () => void;
  handleCarouselContainerScrollToRight: () => void;
}

function useCarouselEventHandler(): UseCarouselEventHandlerResult {
  const carouselListRef = useRef<HTMLDivElement>(null);

  const [isDisabledScrollToLeftButton, setIsDisabledScrollToLeftButton] =
    useState(true);
  const [isDisabledScrollToRightButton, setIsDisabledScrollToRightButton] =
    useState(false);

  const handleCarouselContainerScrollToLeft = () => {
    if (!carouselListRef.current) return;

    const currentScrollPosition = Math.floor(
      carouselListRef.current.scrollLeft
    );

    carouselListRef.current.scrollTo({
      left: currentScrollPosition - 240,
    });
  };

  const handleCarouselContainerScrollToRight = () => {
    if (!carouselListRef.current) return;

    const currentScrollPosition = Math.floor(
      carouselListRef.current.scrollLeft
    );

    carouselListRef.current.scrollTo({
      left: currentScrollPosition + 240,
    });
  };

  const handleSetScrollToButtons = () => {
    if (!carouselListRef.current) return;

    const scrollMinPosition = 0;
    const scrollMaxPosition =
      carouselListRef.current.scrollWidth - carouselListRef.current.offsetWidth;
    const currentScrollPosition = Math.floor(
      carouselListRef.current.scrollLeft
    );

    if (scrollMinPosition >= currentScrollPosition) {
      setIsDisabledScrollToLeftButton(true);
    }

    if (scrollMinPosition < currentScrollPosition) {
      setIsDisabledScrollToLeftButton(false);
    }

    if (scrollMaxPosition <= currentScrollPosition) {
      setIsDisabledScrollToRightButton(true);
    }

    if (scrollMaxPosition > currentScrollPosition) {
      setIsDisabledScrollToRightButton(false);
    }
  };

  return {
    isDisabledScrollToLeftButton,
    isDisabledScrollToRightButton,
    carouselListRef,
    handleSetScrollToButtons,
    handleCarouselContainerScrollToLeft,
    handleCarouselContainerScrollToRight,
  };
}

export default useCarouselEventHandler;
