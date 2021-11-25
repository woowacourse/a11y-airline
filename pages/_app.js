import styled from "@emotion/styled";
import Header from "../src/components/Header";

import { GlobalStyle } from "../src/styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Main>
        <h1>티케의 a11y-airline 미션</h1>
        <p>
          <span role="img" aria-label="체크 이모지" aria-hidden="true">
            ✅
          </span>
          스크린리더를 활용하여 사용해보세요
        </p>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;

const Main = styled.main`
  width: 100%;

  text-align: center;

  p {
    margin: 1rem 0;
  }
`;
