import {Item} from '../../data';

import styles from './Card.module.css';

const Card = ({itemInfo}: {itemInfo: Item}) => {
  const {from, to, sit, image, currency, price, link} = itemInfo;
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <li className={`${styles.card} `}>
      <a href={link}>
        <section className={styles.title}>
          <p>
            {from} - {to}
          </p>
        </section>
        <section className={styles.content}>
          <p className={styles.contentSit}>{sit}</p>
          <p className={styles.contentPrice}>
            <span aria-hidden='true'>{currency}</span>
            {formattedPrice}
            <span className={styles.textHidden}>대한민국 원</span>
            <span aria-hidden='true'>~</span>
          </p>
        </section>
        <div className={`${styles.card} ${styles[image]}`}></div>
      </a>
    </li>
  );
};

export default Card;
