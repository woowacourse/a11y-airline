import React, { useState } from 'react';
import {
  Container,
  H1,
  H2,
  H3,
  PassengerType,
  Button,
  Input,
  CurrentAdultCount,
  Content,
} from './SpinButton.styles';

const SpinButton = () => {
  const [currentAdultCount, setCurrentAdultCount] = useState(1);

  const reduceAdultCount = () => {
    if (currentAdultCount <= 1) return;

    setCurrentAdultCount((currentAdultCount) => (currentAdultCount -= 1));
  };
  const increaseAdultCount = () => {
    if (currentAdultCount >= 3) return;

    setCurrentAdultCount((currentAdultCount) => (currentAdultCount += 1));
  };

  return (
    <Container>
      <H1>🎯 미션1 Spin Button: 승객수 입력하기</H1>
      <H2>
        소량의 수량을 조정하기에 쉽고 편리한 스핀 버튼은 쇼핑과 관련한 모든 곳에서 쉽게 볼 수
        있는데요. 항공사에서도 승객 수를 선택할 때 스핀 버튼을 사용하는데 제대로 구현하지 않으면
        스크린 리더 사용자는 현재 상태를 알 수 없어 사용하기가 어렵습니다. 이 부분의 웹 접근성을
        개선해보도록 하겠습니다.
      </H2>
      <H3>승객 선택</H3>
      <PassengerType>성인</PassengerType>
      <Content>
        <Button aria-label="성인 탑승자 한명 줄이기" onClick={reduceAdultCount}>
          -
        </Button>
        <Input
          type="number"
          aria-label="성인 인원 수"
          min="1"
          max="3"
          value={currentAdultCount}
          readOnly
        />
        <CurrentAdultCount aria-live="assertive" aria-relevant="additions" aria-atomic="true">
          현재 성인 인원 수 {currentAdultCount}
        </CurrentAdultCount>
        <Button type="button" aria-label="성인 탑승자 한명 늘리기" onClick={increaseAdultCount}>
          +
        </Button>
      </Content>
    </Container>
  );
};

export default SpinButton;
