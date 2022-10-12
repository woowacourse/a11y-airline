import styled from '@emotion/styled';
import ShiftButton from './components/ShiftButton';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const LeftShiftButton = styled(ShiftButton)`
  position: absolute;
  z-index: 10;

  left: 0;
  top: 65%;
  border-radius: 0 30px 30px 0;
  text-align: left;
`;

export const RightShiftButton = styled(ShiftButton)`
  position: absolute;
  z-index: 10;

  right: 0;
  top: 65%;
  border-radius: 30px 0 0 30px;
  text-align: right;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const ItemContainer = styled.ul<{ shift: string }>`
  width: fit-content;
  display: flex;
  list-style: none;
  padding: 0px;
  gap: 15px;

  transition: all ease 0.5s;
  transform: ${props => `translateX(${props.shift})`};
`;
