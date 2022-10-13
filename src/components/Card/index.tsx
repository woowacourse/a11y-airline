import React from 'react';
import { CardInfo } from '../../type';
import S from './Card.module.css';

type CardProps = {
  info: CardInfo;
};

const Card: React.FC<CardProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  info,
  ...props
}) => {
  return (
    <a href='https://www.koreanair.com/kr/ko' className={S.layout} tabIndex={props.tabIndex}>
      <div className={S.description}>
        <p className={`${S.title} ${S['white-black-font']}`}>
          {info.departure} - {info.arrival}
        </p>
        <p className={`${S['sub-title']} ${S['white-black-font']}`}>{info.type}</p>
        <p className={S.paragraph}>KRW {info.price.toLocaleString('ko-KR')} ~</p>
      </div>
      <img className={S['bg-img']} src={info.imageLink} alt={`${info.arrival} 사진`} />
    </a>
  );
};

export default Card;
