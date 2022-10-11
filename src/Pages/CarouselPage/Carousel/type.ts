export type CarouselProps = {
  slideItems: SlideItemProps[];
  totalSlides?: number;
  itemWidth?: number;
  itemGap?: number;
};

export type SlideControlProps = { slidePrevious: () => void; slideNext: () => void };

export type SlideItemProps = {
  id: number;
  location: string;
  seat: string;
  price: string;
  image: string;
  href: string;
};
