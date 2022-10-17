import { HTMLAttributes } from 'react';
import * as S from './index.style';

export interface ItemProps extends HTMLAttributes<HTMLAnchorElement> {
  link: string;
  imgSrc: string;
  description: {
    title: string;
    titleLabel?: string;
    subTitle: string;
    subTitleLabel?: string;
    information: string;
    informationLabel?: string;
  };
}

const Item = ({ link, imgSrc, description, ...props }: ItemProps) => {
  return (
    <S.Container href={link} {...props}>
      <S.Content src={imgSrc} />
      <S.Description>
        <S.Title aria-label={description.titleLabel}>
          {description.title}
        </S.Title>
        <S.SubTitle aria-label={description.subTitleLabel}>
          {description.subTitle}
        </S.SubTitle>
        <S.Information aria-label={description.informationLabel}>
          {description.information}
        </S.Information>
      </S.Description>
    </S.Container>
  );
};

export default Item;
