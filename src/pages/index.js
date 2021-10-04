import Link from 'next/link';

import SpinButton from './SpinButton';
import Carousel from './Carousel';
import Navigation from './Navigation';

const HomePage = () => {
  return (
    <>
      <Link href="/SpinButton">
        <a>SpinButton 바로가기</a>
      </Link>
      <Link href="/Carousel">
        <a>Carousel 바로가기</a>
      </Link>
      <Link href="/Navigation">
        <a>Navigation 바로가기</a>
      </Link>
    </>
  );
};

export default HomePage;
