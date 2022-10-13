const Carousel = document.getElementById("carousel-root");
const LeftButton = document.getElementById("carousel-left");
const RightButton = document.getElementById("carousel-right");
const AriaLive = document.getElementById("carousel-button-live");

const scrollStatus = {
  ing: false,
  timeout: null,
};

const hasNotPrevTravelItem = () => {
  const { scrollLeft: currentScrollLeft } = Carousel;

  return currentScrollLeft === 0;
};

const hasNotNextTravelItem = () => {
  const { scrollLeft: currentScrollLeft, clientWidth, scrollWidth } = Carousel;

  return clientWidth + currentScrollLeft >= scrollWidth;
};

Carousel.addEventListener("scroll", () => {
  scrollStatus.ing = true;

  if (scrollStatus.timeout) {
    clearTimeout(scrollStatus.timeout);
  }

  scrollStatus.timeout = setTimeout(() => {
    scrollStatus.ing = false;
  }, 100);
});

LeftButton.addEventListener("click", () => {
  if (hasNotPrevTravelItem()) {
    AriaLive.innerText = "이전 상품이 존재하지 않습니다.";

    return;
  }

  if (scrollStatus.ing) {
    return;
  }

  Carousel.scrollTo({ left: Carousel.scrollLeft - 200, behavior: "smooth" });
});

RightButton.addEventListener("click", () => {
  if (hasNotNextTravelItem()) {
    AriaLive.innerText = "다음 상품이 존재하지 않습니다.";

    return;
  }

  if (scrollStatus.ing) {
    return;
  }

  Carousel.scrollTo({ left: Carousel.scrollLeft + 200, behavior: "smooth" });
});
