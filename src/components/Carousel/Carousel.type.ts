import { CONTROL_BUTTON_KIND } from 'components/Carousel/Carousel.constant';
import { ObjectValueToUnion } from 'type/utils';

export type CarouselProps = {
  itemWidth: number;
  itemHeight: number;
  itemLength: number;
  gap: number;
  viewingCount: number;
};

export type UseCarouselProps = CarouselProps;

export type WrapperProps = {
  width: number;
};

export type ControlButtonProps = {
  top: number;
  kind: ObjectValueToUnion<typeof CONTROL_BUTTON_KIND>;
};
