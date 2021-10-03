import Link from "next/link";
import styles from "../styles/homePage.module.css";

const HomePage = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/SpinButton">
              <a>SpinButton 바로가기</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/Carousel">
              <a>Carousel 바로가기</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/Navigation">
              <a>Navigation 바로가기</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
