import { css } from '@emotion/react';
import { SpinButton, Tooltip } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>승객 선택</h1>
      </header>
      <section>
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 16px;
          `}
        >
          <h2>성인</h2>
          <Tooltip />
        </div>
        <SpinButton />
      </section>
    </div>
  );
};

export default App;

// 성인 탑승자 한명 줄이기 버튼
// 성인 1 텍스트 숫자만 수정
// 성인 탑승자 한명 늘리기 버튼
// 성인 승객 추가 2
// 성인 탑승자 한명 늘리기 버튼
// 성인 승객 추가 3
