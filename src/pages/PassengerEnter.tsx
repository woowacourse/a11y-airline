import styled from 'styled-components';
import SpinButton from '../components/SpinButton';
import Tooltip from '../components/Tooltip';

const PassengerEnter = () => {
  return (
    <S.Main>
      <S.Title>승객 선택</S.Title>
      <S.PassengerType>
        <S.SubTitle>성인</S.SubTitle>
        <Tooltip ariaLabel={'탑승자 유형 툴팁: 성인'} />
      </S.PassengerType>
      <SpinButton />
    </S.Main>
  );
};

const S = {
  Main: styled.main`
    display: flex;
    flex-direction: column;
  `,

  Title: styled.h1`
    margin-bottom: 1.5rem;
  `,

  SubTitle: styled.h2`
    margin-right: 0.5rem;
  `,

  PassengerType: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `,
};

export default PassengerEnter;
