import styled from '@emotion/styled';

export const Container = styled.a`
  text-decoration: none;
  color: black;
  position: relative;

  width: 230px;
  height: 300px;
  display: flex;

  p {
    margin: 0;
  }
`;

export const Content = styled.img`
  width: 230px;
  height: 300px;
  border-radius: 5px;
`;

export const Description = styled.div`
  position: absolute;
  padding: 3px 10px;
`;

export const Title = styled.h2`
  font-size: 14px;
`;

export const SubTitle = styled.p`
  font-size: 12px;
`;

export const Information = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #11277b;
  text-shadow: -0.5px 0 #fff, 0 0.5px #fff, 0.5px 0 #fff, 0 -0.5px #fff;
  padding: 5px 0px;
`;
