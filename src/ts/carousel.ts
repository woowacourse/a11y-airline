import "../css/carousel.css";

const $prevArrowButton = document.querySelector(
  ".prev-arrow-button"
) as HTMLButtonElement;
const $nextArrowButton = document.querySelector(
  ".next-arrow-button"
) as HTMLButtonElement;
const $carouselList = document.querySelector(
  ".carousel-list"
) as HTMLUListElement;

let currentCarouselIndex = 0;

const animateCarousel = (currentCarouselIndex: number) => {
  $carouselList.animate(
    [{ transform: `translateX(calc((-270px) * ${currentCarouselIndex}))` }],
    {
      // timing options
      duration: 200,
      fill: "forwards",
    }
  );
};

$prevArrowButton.addEventListener("click", () => {
  if (currentCarouselIndex === 0) {
    return;
  }
  currentCarouselIndex -= 1;
  animateCarousel(currentCarouselIndex);
});

$nextArrowButton.addEventListener("click", () => {
  if (currentCarouselIndex === 3) {
    return;
  }
  currentCarouselIndex += 1;
  animateCarousel(currentCarouselIndex);
});
