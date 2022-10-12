import { useState, useRef, useEffect } from 'react';
import { UseCarouselProps } from 'components/Carousel/Carousel.type';

const useCarousel = ({
  itemWidth,
  itemHeight,
  itemLength,
  gap,
  viewingCount,
}: UseCarouselProps) => {
  const [message, setMessage] = useState('');
  const [reachedAt, setReachedAt] = useState<'start' | 'end' | null>('start');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentPosRef = useRef(0);
  const scrollTimerIdRef = useRef<number | null>(null);
  const messageTimerIdRef = useRef<null | number>(null);

  useEffect(() => {
    if (message === '') {
      return;
    }

    if (typeof messageTimerIdRef.current === 'number') {
      clearTimeout(messageTimerIdRef.current);
      messageTimerIdRef.current = null;
    }

    messageTimerIdRef.current = window.setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);

  const wrapperWidth = Math.min(
    itemWidth * viewingCount + itemWidth / 2,
    window.innerWidth,
  );
  const controlButtonTop = itemHeight / 2;
  const isReachedStart = reachedAt === 'start';
  const isReachedEnd = reachedAt === 'end';

  const handleClickPrevButton = () => {
    if (isReachedStart) {
      setMessage('이미 목록의 처음 위치에 있습니다.');
      return;
    }

    if (isReachedEnd) {
      currentPosRef.current -= (itemWidth + gap) * viewingCount;
      wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
      setReachedAt(null);
      return;
    }

    if (currentPosRef.current == 0) {
      setReachedAt('start');
      return;
    }

    currentPosRef.current -= itemWidth + gap;
    wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
  };

  const handleClickNextButton = () => {
    if (isReachedEnd) {
      setMessage('이미 목록의 끝 위치에 있습니다.');
      return;
    }

    if (isReachedStart) {
      setReachedAt(null);
    }

    if (
      currentPosRef.current >=
      itemWidth * itemLength +
        gap * (itemLength - 1) -
        itemWidth * (viewingCount + 1) -
        gap * viewingCount
    ) {
      currentPosRef.current += (itemWidth + gap) * 2;
      wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
      setReachedAt('end');
      return;
    }

    currentPosRef.current += itemWidth + gap;
    wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
  };

  const handleScrollWrapper = () => {
    if (scrollTimerIdRef.current !== null) {
      window.clearTimeout(scrollTimerIdRef.current);
    }

    scrollTimerIdRef.current = window.setTimeout(() => {
      scrollTimerIdRef.current = null;
      currentPosRef.current = wrapperRef.current!.scrollLeft;

      if (currentPosRef.current <= 0) {
        setReachedAt('start');
        return;
      }

      if (
        currentPosRef.current >=
        itemWidth * itemLength +
          gap * (itemLength - 1) -
          itemWidth * (viewingCount + 1) -
          gap * viewingCount +
          itemWidth / 2
      ) {
        setReachedAt('end');
        return;
      }

      setReachedAt(null);
    }, 100);
  };

  return {
    message,
    wrapperRef,
    wrapperWidth,
    controlButtonTop,
    isReachedStart,
    isReachedEnd,
    handleClickPrevButton,
    handleClickNextButton,
    handleScrollWrapper,
  };
};

export default useCarousel;
