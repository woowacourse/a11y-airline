import { CardInfo } from '../../type';
import S from './Card.module.css';

type CardProps = {
  info: CardInfo;
};

const Card: React.FC<CardProps> = ({ info }) => {
  return (
    <div className={S.layout}>
      <div className={S.description}>
        <h1 className={`${S.title} ${S['white-black-font']}`}>
          {info.departure} - {info.arrival}
        </h1>
        <p className={`${S['sub-title']} ${S['white-black-font']}`}>{info.type}</p>
        <p className={S.paragraph}>KRW {info.price.toLocaleString('ko-KR')} ~</p>
      </div>
      <img className={S['bg-img']} src={info.imageLink} alt={`${info.arrival} 사진`} />
    </div>
  );
};

export default Card;
