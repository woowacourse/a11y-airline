import Carousel from './components/Carousel/Carousel';
import PassengerCounter from './components/PassengerCounter/PassengerCounter';

import styles from './App.module.css';

const App = () => {
  return (
    <main>
      <article className={styles.carousel}>
        <header className={styles.tripTitle}>지금 떠나기 좋은 여행</header>
        <Carousel />
      </article>
      <article>
        <header>승객 선택</header>
        <PassengerCounter />
      </article>
    </main>
  );
};

export default App;
