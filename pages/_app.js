import Head from "next/head";
import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="미키 항공사" />
        <title>미키 항공사</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
