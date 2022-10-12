import { FlexBox, CarouselItem } from "components";
import { CarouselItemProps } from "components/CarouselItem/type";
import { travelList } from "constants/index";
import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import useActiveElement from "hooks/useActiveElement";

const MOVE_COUNT = {
  MIN: 0,
  MAX: travelList.length - 5,
};

export const Carousel = () => {
  const [moveCount, setMoveCount] = useState(0);
  const focusedElement = useActiveElement("li");

  useEffect(() => {
    if (
      focusedElement &&
      focusedElement.tagName === "LI" &&
      focusedElement.parentNode
    ) {
      let currentFocusIndex = Array.prototype.indexOf.call(
        focusedElement.parentNode.children,
        focusedElement
      );

      if (currentFocusIndex < MOVE_COUNT.MIN) {
        currentFocusIndex = MOVE_COUNT.MIN;
      }
      if (currentFocusIndex > MOVE_COUNT.MAX) {
        currentFocusIndex = MOVE_COUNT.MAX;
      }

      setMoveCount(currentFocusIndex);
    }
  }, [focusedElement]);

  const isLeftButtonDisabled = moveCount <= MOVE_COUNT.MIN;
  const isRightButtonDisabled = moveCount >= MOVE_COUNT.MAX;

  const handleCarouselButton = (direction: "left" | "right") => {
    if (direction === "left") {
      if (isLeftButtonDisabled) {
        return;
      }
      setMoveCount((prev) => prev - 1);
      return;
    }
    if (isRightButtonDisabled) {
      return;
    }
    setMoveCount((prev) => prev + 1);
  };

  return (
    <FlexBox as="section" flexDirection="column" gap="0.5rem">
      <h1>지금 떠나기 좋은 여행</h1>
      <Slider>
        <Content as="ul" moveCount={moveCount} gap="0.5rem">
          {travelList.map((travelItem: CarouselItemProps, index) => (
            <li key={index}>
              <CarouselItem {...travelItem} />
            </li>
          ))}
        </Content>
        <LeftButton
          onClick={() => handleCarouselButton("left")}
          aria-disabled={isLeftButtonDisabled}
          isDisabled={isLeftButtonDisabled}
          aria-label="이전 항목"
        >
          <IoIosArrowBack size={23} />
        </LeftButton>
        <RightButton
          onClick={() => handleCarouselButton("right")}
          aria-disabled={isRightButtonDisabled}
          isDisabled={isRightButtonDisabled}
          aria-label="다음 항목"
        >
          <IoIosArrowForward size={23} />
        </RightButton>
      </Slider>
    </FlexBox>
  );
};

const Slider = styled.div`
  width: 52rem;
  overflow: hidden;
  position: relative;
`;

type ContentProps = {
  moveCount: number;
};

const Content = styled(FlexBox)<ContentProps>`
  ${({ moveCount }) => css`
    transition: all 1s;
    transform: translateX(calc(${moveCount} * -10.5rem));
  `}
`;

type CarouselButtonProps = {
  isDisabled: boolean;
};

const CarouselButton = styled.button.attrs({
  type: "button",
})<CarouselButtonProps>`
  ${({ isDisabled }) => css`
    box-sizing: border-box;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    line-height: 3rem;
    padding: 0.25rem;

    ${isDisabled &&
    css`
      cursor: not-allowed;
    `}
  `}
`;

const LeftButton = styled(CarouselButton)`
  transform: translate3d(-50%, -8rem, 0);
  text-align: end;
`;

const RightButton = styled(CarouselButton)`
  transform: translate3d(calc(52rem - 50%), -8rem, 0);
  text-align: start;
`;
