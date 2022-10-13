interface ComponentImpl {
  readonly target: HTMLElement | DocumentFragment;
}

type FunctionType = (...arg: any[]) => any;

interface CarouselItemImpl {
  imageSrc: string;
  startingPoint: string;
  departure: string;
  price: number;
  anchorTo: string;
}
