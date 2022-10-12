import { useRef, useEffect, PropsWithChildren, Children } from 'react';
import styled, { css } from 'styled-components';
import { WrapperProps, ControlButtonProps } from 'components/Carousel/Carousel.type';
import { CONTROL_BUTTON_KIND } from 'components/Carousel/Carousel.constant';

const ITEM_WIDTH = 230;
const ITEM_HEIGHT = 295;
const GAP = 8;
const VIEWING_COUNT = 2;

const Carousel = ({ children }: PropsWithChildren) => {
  const currentPos = useRef(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isReachedEnd = useRef(false);

  const wrapperWidth = ITEM_WIDTH * VIEWING_COUNT + ITEM_WIDTH / 2;
  const controlButtonTop = ITEM_HEIGHT / 2;

  const handleClickPrevButton = () => {
    if (isReachedEnd.current) {
      currentPos.current -= (ITEM_WIDTH + GAP) * 2;
      wrapperRef.current!.scrollTo({ left: currentPos.current, behavior: 'smooth' });
      isReachedEnd.current = false;
      return;
    }

    if (currentPos.current == 0) {
      return;
    }

    currentPos.current -= ITEM_WIDTH + GAP;
    wrapperRef.current!.scrollTo({ left: currentPos.current, behavior: 'smooth' });
  };

  const handleClickNextButton = () => {
    if (currentPos.current >= 952) {
      currentPos.current = 1428 + 238;
      wrapperRef.current!.scrollTo({ left: currentPos.current, behavior: 'smooth' });
      isReachedEnd.current = true;

      return;
    }

    currentPos.current += ITEM_WIDTH + GAP;
    wrapperRef.current!.scrollTo({ left: currentPos.current, behavior: 'smooth' });
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
          top={controlButtonTop}
          kind={CONTROL_BUTTON_KIND.PREV}
        >
          {'<'}
        </ControlButton>
        <ControlButton
          onClick={handleClickNextButton}
          aria-label="다음"
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
  `}
`;
