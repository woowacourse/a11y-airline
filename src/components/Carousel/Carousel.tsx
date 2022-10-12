import { useState, useRef, useEffect, PropsWithChildren, Children } from 'react';
import styled, { css } from 'styled-components';
import { WrapperProps, ControlButtonProps } from 'components/Carousel/Carousel.type';
import { CONTROL_BUTTON_KIND } from 'components/Carousel/Carousel.constant';

const ITEM_WIDTH = 230;
const ITEM_HEIGHT = 295;
const GAP = 8;
const VIEWING_COUNT = 2;

const Carousel = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState('');
  const [reachedAt, setReachedAt] = useState<'start' | 'end' | null>('start');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentPosRef = useRef(0);
  const timerIdRef = useRef<number | null>(null);

  useEffect(() => {
    wrapperRef.current?.addEventListener('scroll', handleScrollWrapper);

    return () => {
      wrapperRef.current?.removeEventListener('scroll', handleScrollWrapper);
    };
  }, []);

  const wrapperWidth = ITEM_WIDTH * VIEWING_COUNT + ITEM_WIDTH / 2;
  const controlButtonTop = ITEM_HEIGHT / 2;
  const isReachedStart = reachedAt === 'start';
  const isReachedEnd = reachedAt === 'end';

  const handleClickPrevButton = () => {
    if (isReachedEnd) {
      currentPosRef.current -= (ITEM_WIDTH + GAP) * 2;
      wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
      setReachedAt(null);
      return;
    }

    if (currentPosRef.current == 0) {
      setReachedAt('start');
      return;
    }

    currentPosRef.current -= ITEM_WIDTH + GAP;
    wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
  };

  const handleClickNextButton = () => {
    if (isReachedStart) {
      setReachedAt(null);
    }

    if (currentPosRef.current >= 952) {
      currentPosRef.current = 1428 + 238;
      wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
      setReachedAt('end');

      return;
    }

    currentPosRef.current += ITEM_WIDTH + GAP;
    wrapperRef.current!.scrollTo({ left: currentPosRef.current, behavior: 'smooth' });
  };

  const handleScrollWrapper = () => {
    if (timerIdRef.current !== null) {
      window.clearTimeout(timerIdRef.current);
    }

    timerIdRef.current = window.setTimeout(() => {
      timerIdRef.current = null;
      currentPosRef.current = wrapperRef.current!.scrollLeft;

      if (currentPosRef.current <= 0) {
        setReachedAt('start');
        setMessage('목록의 처음에 도달했습니다.');
        return;
      }

      if (currentPosRef.current >= 1320) {
        setReachedAt('end');
        setMessage('목록의 끝에 도달했습니다.');
        return;
      }

      setReachedAt(null);
      setMessage('');
    }, 100);
  };

  return (
    <Wrapper ref={wrapperRef} width={wrapperWidth}>
      <ListWrapper>
        {Children.map(children, (child) => (
          <ListItem>{child}</ListItem>
        ))}
      </ListWrapper>
      <ControlWrapper>
        <ControlButton
          onClick={handleClickPrevButton}
          aria-label="이전"
          aria-disabled={isReachedStart}
          top={controlButtonTop}
          kind={CONTROL_BUTTON_KIND.PREV}
        >
          {'<'}
        </ControlButton>
        <ControlButton
          onClick={handleClickNextButton}
          aria-label="다음"
          aria-disabled={isReachedEnd}
          top={controlButtonTop}
          kind={CONTROL_BUTTON_KIND.NEXT}
        >
          {'>'}
        </ControlButton>
      </ControlWrapper>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  ${({ width }: WrapperProps) => css`
    width: ${width}px;
    position: relative;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  `}
`;

const ListWrapper = styled.ul`
  display: flex;
  gap: 8px;
`;

const ListItem = styled.li`
  scroll-snap-align: start;
`;

const ControlWrapper = styled.div`
  position: sticky;
  left: 0;
  height: 0;
`;

const ControlButton = styled.button`
  ${({ top, kind }: ControlButtonProps) => css`
    position: absolute;
    top: -${top}px;

    ${kind === CONTROL_BUTTON_KIND.PREV
      ? css`
          left: 0;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
        `
      : css`
          right: 0;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        `}

    width: 30px;
    height: 60px;
    background-color: #000;
    opacity: 0.7;
    color: #fff;
    cursor: pointer;
    transform: translateY(-50%);

    &[aria-disabled='true'] {
      cursor: not-allowed;
    }
  `}
`;
