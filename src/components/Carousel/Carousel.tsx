import { PropsWithChildren, Children } from 'react';
import styled, { css } from 'styled-components';
import {
  CarouselProps,
  WrapperProps,
  ControlButtonProps,
} from 'components/Carousel/Carousel.type';
import useCarousel from 'components/Carousel/useCarousel';
import { CONTROL_BUTTON_KIND } from 'components/Carousel/Carousel.constant';
import { HiddenMessage } from 'components';

const Carousel = ({
  itemWidth,
  itemHeight,
  itemLength,
  gap,
  viewingCount,
  children,
}: PropsWithChildren<CarouselProps>) => {
  const {
    message,
    wrapperRef,
    wrapperWidth,
    controlButtonTop,
    isReachedStart,
    isReachedEnd,
    handleClickPrevButton,
    handleClickNextButton,
    handleScrollWrapper,
  } = useCarousel({ itemWidth, itemHeight, itemLength, gap, viewingCount });

  return (
    <Wrapper ref={wrapperRef} width={wrapperWidth} onScroll={handleScrollWrapper}>
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
      <HiddenMessage aria-live="assertive">{message}</HiddenMessage>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  ${({ width }: WrapperProps) => css`
    width: ${width}px;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
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
