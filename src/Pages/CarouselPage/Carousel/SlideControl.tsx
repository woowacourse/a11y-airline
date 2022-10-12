import { SlideControlProps } from './type';
import ButtonLeft from 'assets/button-left.svg';
import ButtonRight from 'assets/button-right.svg';
import styled from 'styled-components';

const SlideControl = ({
  slidePrevious,
  slideNext,
  leftButtonRef,
  rightButtonRef,
}: SlideControlProps) => {
  return (
    <Wrapper>
      <LeftButton onClick={slidePrevious} ref={leftButtonRef} aria-label="이전" />
      <RightButton onClick={slideNext} ref={rightButtonRef} aria-label="다음" />
    </Wrapper>
  );
};

export default SlideControl;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

const LeftButton = styled.button`
  position: absolute;
  left: 0;
  background: url(${ButtonLeft}) no-repeat center top;
  background-size: 30px 60px;
  width: 30px;
  height: 60px;
`;

const RightButton = styled.button`
  background: url(${ButtonRight}) no-repeat center top;
  background-size: 30px 60px;
  position: absolute;
  right: 0;
  width: 30px;
  height: 60px;
`;
