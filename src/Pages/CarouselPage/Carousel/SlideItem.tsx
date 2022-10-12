import { SlideItemProps } from './type';
import styled, { css } from 'styled-components';

const SlideItem = ({
  location,
  seat,
  price,
  image,
  href,
  width,
}: SlideItemProps & { width: number }) => {
  return (
    <Wrapper width={width}>
      <a href={href}>
        <BgImg loading="lazy" src={image} alt={location + ' 사진'} aria-hidden={true} />
        <Description>
          <MainText>{location}</MainText>
          <SubText>{seat}</SubText>
          <EmphasisText aria-hidden={true}>{price}</EmphasisText>
          <ScreenReaderOnlyMessage>하하</ScreenReaderOnlyMessage>
        </Description>
      </a>
    </Wrapper>
  );
};

export default SlideItem;

const Wrapper = styled.li<{ width: number }>`
  ${({ width }) => css`
    min-width: ${width}px;
    display: list-item;
    position: relative;
    font-size: 1rem;
  `}
`;

const BgImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: top;
`;

const Description = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  color: #000;
  padding: 20px;
  box-sizing: border-box;
`;

const MainText = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
  word-wrap: break-word;
  line-height: 1.5;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubText = styled.p`
  margin-bottom: 7px;
`;

const EmphasisText = styled.p`
  font-weight: 700;
  text-shadow: -0.5px 0 #fff, 0 0.5px #fff, 0.5px 0 #fff, 0 -0.5px #fff;
`;

const ScreenReaderOnlyMessage = styled.span`
  overflow: hidden;
  white-space: nowrap;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
`;
