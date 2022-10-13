const Carousel = document.getElementById("carousel-root");
const LeftButton = document.getElementById("carousel-left");
const RightButton = document.getElementById("carousel-right");

const scrollStatus = {
  ing: false,
  timeout: null,
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
  if (scrollStatus.ing) {
    return;
  }

  const currentScrollLeft = Carousel.scrollLeft;

  Carousel.scrollTo({ left: currentScrollLeft - 200, behavior: "smooth" });
});

RightButton.addEventListener("click", () => {
  if (scrollStatus.ing) {
    return;
  }

  const currentScrollLeft = Carousel.scrollLeft;

  Carousel.scrollTo({ left: currentScrollLeft + 200, behavior: "smooth" });
});
