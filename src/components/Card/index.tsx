import React from 'react';
import { CardInfo } from '../../type';
import S from './Card.module.css';

type CardProps = {
  info: CardInfo;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Card: React.ForwardRefRenderFunction<HTMLAnchorElement, CardProps> = (
  { info, ...props },
  ref
) => {
  return (
    <a
      href='https://www.koreanair.com/kr/ko'
      className={S.layout}
      tabIndex={props.tabIndex}
      ref={ref}>
      <div className={S.description}>
        <p
          className={`${S.title} ${S['white-black-font']}`}
          aria-label={`${info.departure}출발 ${info.arrival}도착`}>
          {info.departure} - {info.arrival}
        </p>
        <p className={`${S['sub-title']} ${S['white-black-font']}`}>{info.type}</p>
        <p className={S.paragraph}>KRW {info.price.toLocaleString('ko-KR')} ~</p>
      </div>
      <img className={S['bg-img']} src={info.imageLink} alt={`${info.arrival} 사진`} />
    </a>
  );
};

export default React.forwardRef(Card);
