import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <Link href="/spin-button">미션1 Spin Button: 승객수 입력하기</Link>
      <Link href="/carousel">미션2 Carousel: 지금 떠나기 좋은 여행</Link>
    </div>
  );
};

export default Home;
