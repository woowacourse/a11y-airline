import styled from '@emotion/styled';

export const Container = styled.abbr`
  width: fit-content;
  height: fit-content;
  position: relative;
  user-select: none;
`;

export const Tooltip = styled.span`
  display: flex;
  border: 1px solid #7b7b7b;
  border-radius: 100%;
  width: 17px;
  height: 17px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`;

export const Content = styled.p`
  width: fit-content;
  height: fit-content;
  background-color: black;
  opacity: 0.8;
  color: white;
  font-size: 13px;
  padding: 10px;
  border-radius: 3px;
  position: absolute;
  white-space: nowrap;
  left: 13px;
  top: 13px;
  margin: 0;
`;
