import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CarouselItemType } from './../const/carousel';

type ChildrenProp = {
  children: React.ReactElement<any>[];
  currentPage: any;
  setCurrentPage: any;
};

const Carousel = ({ children, currentPage, setCurrentPage }: ChildrenProp) => {
  const sliderItemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const currentElement = sliderItemRefs.current[currentPage];

    sliderItemRefs.current[currentPage]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
    sliderItemRefs.current.map((element, idx) => {
      element.ariaHidden = 'true';
      if (idx === currentPage) {
        element.ariaHidden = 'false';
      }
    });
  }, [currentPage]);

  const setPageRef = (page: number) => (el: HTMLDivElement) => {
    sliderItemRefs.current[page] = el;

    return sliderItemRefs.current[page];
  };

  const refedChildren = children.map((child, idx) => {
    return { ...child, ref: setPageRef(idx) };
  });

  const commentGenerator = (item: CarouselItemType) => {
    return `${item.title}가 선택중입니다. ${item.flightType} ${item.price}`;
  };
  return (
    <>
      <S.Slide>{refedChildren}</S.Slide>
      <S.Narrator aria-live='polite' aria-relevant='additions'>
        {commentGenerator(refedChildren[currentPage].props.item)}
      </S.Narrator>
    </>
  );
};

const S = {
  Slide: styled.ul`
    position: relative;
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 20rem;
    &:first-child {
      margin-left: 0;
    }

    overflow: scroll;
    scroll-snap-type: x mandatory;
    scroll-margin: 0;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    & > div {
      scroll-snap-align: start;
    }

    list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
  `,
  Narrator: styled.div`
    position: absolute;
    text-indent: -9999px;
  `,
};

export default Carousel;
