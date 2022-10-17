import styled from '@emotion/styled';
import ShiftButton from './components/ShiftButton';

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const LeftShiftButton = styled(ShiftButton)`
  position: absolute;
  z-index: 10;

  left: 0;
  top: 50%;
  border-radius: 0 30px 30px 0;
  text-align: left;
`;

export const RightShiftButton = styled(ShiftButton)`
  position: absolute;
  z-index: 10;

  right: 0;
  top: 50%;
  border-radius: 30px 0 0 30px;
  text-align: right;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const ItemContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  padding: 0px;
  gap: 15px;
  overflow-x: hidden;
`;
