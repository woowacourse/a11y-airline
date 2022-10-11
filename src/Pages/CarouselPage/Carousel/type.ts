import { RefObject } from 'react';

export type CarouselProps = {
  slideItems: SlideItemProps[];
  totalSlides?: number;
  itemWidth?: number;
  itemGap?: number;
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
  price: string;
  image: string;
  href: string;
};
