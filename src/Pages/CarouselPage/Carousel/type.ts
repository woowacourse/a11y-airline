import { RefObject } from 'react';

export type CarouselProps = {
  slideItems: SlideItemProps[];
  displayedSlideCount?: number;
  itemWidth?: number;
  itemGap?: number;
  title?: string;
};

export type SlideControlProps = {
  slidePrevious: () => void;
  slideNext: () => void;
  leftButtonRef: RefObject<HTMLButtonElement>;
  rightButtonRef: RefObject<HTMLButtonElement>;
};

export type SlideItemProps = {
  id: number;
  location: string;
  seat: string;
  price: number;
  image: string;
  href: string;
};
