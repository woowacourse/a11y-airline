import { css } from '@emotion/react';
import { SpinButton, Tooltip } from '../components';

const SpinButtonPage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default SpinButtonPage;
