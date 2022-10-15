export const scrollByIndex = <F extends HTMLElement, I extends (HTMLElement | null)[]>(
  frame: F,
  items: I,
  currentIndex: number,
  direction: 'left' | 'right'
) => {
  const targetIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
  const currentLeftPosition = items[currentIndex]?.getBoundingClientRect().left;
  const targetLeftPosition = items[targetIndex]?.getBoundingClientRect().left;

  if (!currentLeftPosition || !targetLeftPosition) {
    return;
  }

  const scrollWidth = Math.abs(currentLeftPosition - targetLeftPosition);

  frame.scrollBy({
    left: direction === 'left' ? scrollWidth * -1 : scrollWidth,
    behavior: 'smooth',
  });
};
