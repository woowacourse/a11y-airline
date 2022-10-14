import { CarouselItem } from "../../mock/data/carousel";
import styles from "./styles.module.css";
import srStyles from "../../styles/screenReader.module.css";

type Props = Omit<CarouselItem, "id">;

function CarouselCard({
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
      <section className={styles.section} aria-describedby="described">
        <p className={srStyles.srOnly}>
          {`${departure}에서 출발해 ${arrival}로 도착하는 여행 상품입니다. 
            왕복 티켓 가격은 ${Number(price).toLocaleString(
              "ko-KR"
            )}원 부터 이며 좌석은 일반석 입니다. 
            자세한 내용을 확인하시려면 클릭해주세요.`}
        </p>

        <h1 aria-hidden={true}>{`${departure} - ${arrival}`}</h1>

        <div aria-hidden={true}>
          <div className={styles.flexRow}>
            <p>{cabinClass}</p>
            <p>{tripType}</p>
          </div>

          <p>KRW {Number(price).toLocaleString("ko-KR")} ~</p>
        </div>

        <img
          className={styles.backgroundImage}
          src={imgUrl}
          alt={`${departure} - ${arrival} 배경이미지`}
          aria-hidden={true}
        />
      </section>
    </a>
  );
}

export default CarouselCard;
