const slides = document.querySelectorAll(".slide");
const slideLinks = document.querySelectorAll(".slide-link");
const btnLeft = document.querySelector(".slider-btn__left");
const btnRight = document.querySelector(".slider-btn__right");

const addDisabled = (element) => element.classList.add("disabled");
const removeDisabled = (element) => element.classList.remove("disabled");

let curSlide = 0;
const maxSlide = slides.length - 1;

if (curSlide === 0) {
  addDisabled(btnLeft);
}

const goToSlide = (slideIndex) => {
  slides.forEach(
    (slide) => (slide.style.transform = `translateX(${-slideIndex * 320}px)`)
  );
};

const nextSlide = () => {
  if (curSlide !== maxSlide - 1) {
    curSlide++;
    if (curSlide === maxSlide - 1) {
      addDisabled(btnRight);
    }
  }

  removeDisabled(btnLeft);
  goToSlide(curSlide);
};

const prevSlide = () => {
  if (curSlide !== 0) {
    curSlide--;
    if (curSlide === 0) {
      addDisabled(btnLeft);
    }
  }

  removeDisabled(btnRight);
  goToSlide(curSlide);
};

slideLinks.forEach((link, index) => {
  link.addEventListener("focus", () => {
    if (index === maxSlide) return;
    goToSlide(index);
  });
});

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
