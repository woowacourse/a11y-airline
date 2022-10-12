import styled from '@emotion/styled';

export const Container = styled.button<{ isDisable: boolean }>`
  background-color: ${({ isDisable }) => (isDisable ? '#e8e8e8' : 'black')};
  opacity: 0.6;
  color: white;
  border: none;
  width: 30px;
  height: 60px;
  font-size: 20px;
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'pointer')}; ;
`;
