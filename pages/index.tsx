import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <h1 className={styles.title}>
      <Link href="/spin-button">미션1 Spin Button: 승객수 입력하기</Link>
    </h1>
  );
};

export default Home;
