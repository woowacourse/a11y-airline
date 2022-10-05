import styled from 'styled-components';
import SpinButton from '../components/SpinButton';
import Tooltip from '../components/Tooltip';

const PassengerEnter = () => {
  return (
    <main>
      <S.Title>승객 선택</S.Title>
      <S.PassengerType>
        <S.SubTitle>성인</S.SubTitle>
        <Tooltip />
      </S.PassengerType>
      <SpinButton />
    </main>
  );
};

const S = {
  Title: styled.h1`
    margin-bottom: 1.5rem;
  `,

  SubTitle: styled.h2`
    margin-right: 0.5rem;
  `,

  PassengerType: styled.div`
    display: flex;
    align-items: center;
  `,
};

export default PassengerEnter;
