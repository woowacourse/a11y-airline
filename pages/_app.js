import Head from 'next/head';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <html lang="ko">
      <Head>
        <title>접근성 미션</title>
        <meta name="description" content="웹 접근성 미션" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </html>
  );
};

export default App;
