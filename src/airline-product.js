document.addEventListener('DOMContentLoaded', () => {
  const $carousel = document.querySelector('.carousel');
  const $carouselInner = $carousel.querySelector('.carousel-inner');
  const itemCount = $carousel.querySelectorAll('li').length / 2; // @TODO: 홀수 처리 필요
  const $prevBtn = $carousel.querySelector('.carousel-control.left');
  const $nextBtn = $carousel.querySelector('.carousel-control.right');
  let currentIndex = 0;

  $prevBtn.addEventListener('click', () => {
    const width = $carousel.clientWidth;
    currentIndex = -1 * Math.max(0, currentIndex - 1);
    const nextX = currentIndex * width;
    const translate = `translateX(${nextX}px)`;
    $carouselInner.style.transform = translate;
  });
  $nextBtn.addEventListener('click', () => {
    const width = $carousel.clientWidth;
    currentIndex = Math.min(itemCount - 1, currentIndex + 1);
    const nextX = -1 * currentIndex * width;
    const translate = `translateX(${nextX}px)`;
    $carouselInner.style.transform = translate;
  });
});
