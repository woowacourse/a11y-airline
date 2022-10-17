const carousel = document.querySelector(".carousel");

const carouselContentContainer = carousel.querySelector<HTMLElement>(
  ".carousel-content-container"
);

const carouselContents = carouselContentContainer.querySelectorAll<HTMLElement>(
  ".carousel-content-link"
);

const contentLength = carouselContents.length;

let focusedLinkIndex = 0;
const checkFirstItemFocused = (index: number) => index === 0;
const checkLastItemFocused = (index: number) => index === contentLength - 1;

const horizontalScrollToElement: (
  element: HTMLElement,
  snapTo?: "start" | "end" | "center"
) => void = (element, snapTo = "center") => {
  element.scrollIntoView({
    behavior: "smooth",
    inline: snapTo,
  });
  element.focus();
};

const scrollToPrev = () => {
  focusedLinkIndex -= 1;
  horizontalScrollToElement(
    carouselContents[focusedLinkIndex],
    focusedLinkIndex === 0 ? "start" : "center"
  );
};

const scrollToNext = () => {
  focusedLinkIndex += 1;
  horizontalScrollToElement(
    carouselContents[focusedLinkIndex],
    focusedLinkIndex === contentLength - 1 ? "end" : "center"
  );
};

const handleCarouselMove = (target: HTMLButtonElement) => {
  const { classList } = target;
  if (classList.contains("prev") && !checkFirstItemFocused(focusedLinkIndex)) {
    scrollToPrev();
  }
  if (classList.contains("next") && !checkLastItemFocused(focusedLinkIndex)) {
    scrollToNext();
  }
};

const handleScrollToFocus = (target: HTMLElement) => {
  const snapTo =
    target === carouselContents[0]
      ? "start"
      : target === carouselContents[contentLength - 1]
      ? "end"
      : "center";
  focusedLinkIndex = Array.from(carouselContents).indexOf(target);
  horizontalScrollToElement(target, snapTo);
};

carousel.addEventListener("click", (e) => {
  if (!(e.target instanceof HTMLButtonElement)) return;
  if (e.target.classList.contains("control")) {
    handleCarouselMove(e.target);
  }
});

carouselContentContainer.addEventListener("focusin", (e) => {
  if (!(e.target instanceof HTMLAnchorElement)) return;
  handleScrollToFocus(e.target);
});
