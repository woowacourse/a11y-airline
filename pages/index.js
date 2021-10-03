import Link from 'next/link';
import commonStyles from '../styles/common.module.css';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>접근성 미션 메인 페이지</title>
      </Head>
      <div className={commonStyles.center}>
        <div>
          <Link href="/spinButton">첫 번째 미션</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
