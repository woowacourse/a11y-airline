import styled from '@emotion/styled';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  color: #333;
  padding-top: 24px;
`;

const H1 = styled.h1`
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 16px;
`;
const H2 = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

const H3 = styled.h3`
  font-size: 28px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #e8e9ec;
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  height: 44px;
  width: 44px;
  margin: 0 16px;
  font-size: 26px;
  border-bottom: 1px solid #000;
  font-weight: 700;
  text-align: center;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CurrentAdultCount = styled.div`
  width: 0;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
`;

const PassengerType = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;

  &::after {
    content: '?';
    font-size: 12px;
    padding: 0 5px;
    margin-left: 6px;
    border: 1px solid gray;
    border-radius: 50%;
    color: gray;
  }
`;

export { Container, H1, H2, H3, Button, Input, CurrentAdultCount, Content, PassengerType };
