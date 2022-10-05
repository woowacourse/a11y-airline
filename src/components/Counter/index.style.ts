import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  user-select: none;
`;

export const CountButton = styled.button`
  background-color: white;
  border-radius: 100%;
  border: 1px solid #dcdee2;
  width: 37px;
  height: 37px;
  font-size: 20px;
  cursor: pointer;
`;

export const Count = styled.input`
  border: none;
  border-bottom: 1px solid rgb(118, 118, 118);
  width: 40px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  line-height: 35px;
`;

export const Body = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
  align-items: center;
`;
