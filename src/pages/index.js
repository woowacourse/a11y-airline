import Link from 'next/link';

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
