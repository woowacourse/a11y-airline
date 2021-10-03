import Head from "next/head";
import "../styles/globalStyle.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="신세한탄의 누구나 접근할 수 있는 항공사 웹사이트"
        />
        <title>신세한탄의 웹 접근성 미션</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
