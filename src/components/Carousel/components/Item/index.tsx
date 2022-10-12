import { HTMLAttributes } from 'react';
import * as S from './index.style';

export interface ItemProps extends HTMLAttributes<HTMLAnchorElement> {
  link: string;
  imgSrc: string;
  description: {
    title: string;
    subTitle: string;
    information: string;
  };
}

const Item = ({ link, imgSrc, description, ...props }: ItemProps) => {
  return (
    <S.Container href={link} {...props}>
      <S.Content src={imgSrc} alt={description.title} />
      <S.Description>
        <S.Title>{description.title}</S.Title>
        <S.SubTitle>{description.subTitle}</S.SubTitle>
        <S.Information>{description.information}</S.Information>
      </S.Description>
    </S.Container>
  );
};

export default Item;
