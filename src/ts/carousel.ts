import "../css/carousel.css";

const MAX_CAROUSEL_VIEW = 5;

const $prevArrowButton = document.querySelector(
  ".prev-arrow-button"
) as HTMLButtonElement;
const $nextArrowButton = document.querySelector(
  ".next-arrow-button"
) as HTMLButtonElement;
const $carouselList = document.querySelectorAll(".carousel-list");
const $carouselAnchorList = document.querySelectorAll(".carousel-anchor");
const $srCarouselMessage = document.querySelector(".sr-carousel-message");

let currentCarouselIndex = 0;
let prevId = 0;

const animateCarousel = (currentCarouselIndex: number) => {
  $carouselList.forEach((carousel) => {
    carousel.animate(
      [{ transform: `translateX(calc((-270px) * ${currentCarouselIndex}))` }],
      {
        // timing options
        duration: 300,
        fill: "forwards",
      }
    );
  });
};

const prevSlide = () => {
  if (currentCarouselIndex === 0) {
    $prevArrowButton.setAttribute("aria-disabled", "true");
    return;
  }
  $prevArrowButton.setAttribute("aria-disabled", "false");

  currentCarouselIndex -= 1;
  animateCarousel(currentCarouselIndex);
};

const nextSlide = () => {
  if (currentCarouselIndex === 3) {
    $nextArrowButton.setAttribute("aria-disabled", "true");
    return;
  }
  $nextArrowButton.setAttribute("aria-disabled", "false");

  currentCarouselIndex += 1;
  animateCarousel(currentCarouselIndex);
};

$prevArrowButton.addEventListener("click", prevSlide);

$nextArrowButton.addEventListener("click", nextSlide);

$carouselAnchorList.forEach((carousel) => {
  (carousel as HTMLAnchorElement).addEventListener("focus", (e) => {
    const currentId = Number(
      (carousel as HTMLAnchorElement).closest("li")?.dataset.id
    );

    if (currentId === 0) {
      $srCarouselMessage?.insertAdjacentHTML(
        "beforeend",
        "<p>첫번째 요소입니다!</p>"
      );
    }

    if (currentId === 7) {
      $srCarouselMessage?.insertAdjacentHTML(
        "beforeend",
        "<p>마지막 요소입니다.</p>"
      );
    }

    if (currentId >= 4 && prevId < currentId) {
      nextSlide();
    }

    if (currentId <= 3 && prevId > currentId) {
      prevSlide();
    }

    prevId = currentId;
  });
});
