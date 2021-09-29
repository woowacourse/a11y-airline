import Link from 'next/link';
import commonStyles from '../styles/common.module.css';

const Home = () => {
  return (
    <div className={commonStyles.center}>
      <div>
        <Link href="/spinButton">첫 번째 미션</Link>
      </div>
    </div>
  );
};

export default Home;
