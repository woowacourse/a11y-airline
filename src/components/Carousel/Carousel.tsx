import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Carousel = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <PrevButton>{'<'}</PrevButton>
      {children}
      <NextButton>{'<'}</NextButton>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.ul`
  display: flex;
  position: relative;
  gap: 8px;
  overflow-x: hidden;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  width: 30px;
  height: 60px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  cursor: pointer;
  transform: translateY(-50%);
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  width: 30px;
  height: 60px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  cursor: pointer;
  transform: translateY(-50%);
`;
