const slides = document.querySelectorAll(".slide");
const slideLinks = document.querySelectorAll(".slide__link");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = slides.length - 1;

const goToSlide = (slideIndex) => {
  slides.forEach(
    (slide) => (slide.style.transform = `translateX(${-slideIndex * 320}px)`)
  );
};

const nextSlide = () => {
  if (curSlide !== maxSlide - 1) {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = () => {
  if (curSlide !== 0) {
    curSlide--;
  }

  goToSlide(curSlide);
};

slideLinks.forEach((link, i) => {
  link.addEventListener("focus", () => {
    if (i === maxSlide) return;
    goToSlide(i);
  });
});

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
