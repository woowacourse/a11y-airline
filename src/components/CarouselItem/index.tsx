import { CarouselItemType } from "../../mock/data/carousel";
import styles from "./styles.module.css";

type Props = Omit<CarouselItemType, "id">;

function CarouselItem({
  departure,
  arrival,
  cabinClass,
  tripType,
  price,
  imgUrl,
  linkUrl,
}: Props) {
  return (
    <a href={linkUrl}>
      <section className={styles.section}>
        <h1>{`${departure} - ${arrival}`}</h1>

        <div>
          <div className={styles.flexRow}>
            <p>{cabinClass}</p>
            <p>{tripType}</p>
          </div>

          <p>KRW {price} ~</p>
        </div>

        <img
          className={styles.backgroundImage}
          src={imgUrl}
          alt={`${departure} - ${arrival} 배경이미지`}
        />
      </section>
    </a>
  );
}

export default CarouselItem;
