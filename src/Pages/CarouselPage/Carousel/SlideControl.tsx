import { SlideControlProps } from './type';
import ButtonLeft from 'assets/button-left.svg';
import ButtonRight from 'assets/button-right.svg';
import styled from 'styled-components';

const SlideControl = ({ slidePrevious, slideNext }: SlideControlProps) => {
  return (
    <Wrapper>
      <LeftButton onClick={slidePrevious}>
        <Hidden>이전</Hidden>
      </LeftButton>
      <RightButton onClick={slideNext}>
        <Hidden>다음</Hidden>
      </RightButton>
    </Wrapper>
  );
};

export default SlideControl;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  box-sizing: border-box;
`;

const LeftButton = styled.button`
  background: url(${ButtonLeft}) no-repeat center top;
  background-size: 30px 60px;
  position: absolute;
  left: 0;
  width: 30px;
  height: 60px;
  transform: translateY(-50%);
  border: 0;
  cursor: pointer;
`;

const RightButton = styled.button`
  background: url(${ButtonRight}) no-repeat center top;
  background-size: 30px 60px;
  position: absolute;
  right: 0;
  width: 30px;
  height: 60px;
  transform: translateY(-50%);
  border: 0;
  cursor: pointer;
`;

const Hidden = styled.span`
  overflow: hidden;
  white-space: nowrap;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
`;
