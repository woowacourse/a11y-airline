import '../styles/_globals.scss';
import type { AppProps } from 'next/app';
import styles from '../styles/_app.module.scss';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>항공권 예약 | 우테코항공</title>
        <meta
          name="description"
          content="우테코 미션 - 항공사 웹사이트 컴포넌트의 접근성 높이기"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header} role="banner">
        <Link href="/">
          <h1>우테코 항공 ✈️ - 웹접근성 미션</h1>
        </Link>
      </header>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
