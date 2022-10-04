import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import styles from '../styles/pages/_app.module.scss';
import Head from 'next/head';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>항공사 웹사이트 컴포넌트의 접근성 높이기</title>
        <meta
          name="description"
          content="우아한테크코스 레벨4 미션 항공사 웹사이트 컴포넌트의 접근성 높이기"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
