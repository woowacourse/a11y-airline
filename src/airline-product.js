document.addEventListener('DOMContentLoaded', () => {
  const $carousel = document.querySelector('.carousel');
  const $carouselInner = $carousel.querySelector('.carousel-inner');
  const $airlineProductCount = document.querySelector('.airline-product-count');
  const airlineProductCount = $carouselInner.childElementCount;
  const itemCount = $carousel.querySelectorAll('li').length / 2; // @TODO: 홀수 처리 필요
  const $prevBtn = document.querySelector('.carousel-control.left > button');
  const $nextBtn = document.querySelector('.carousel-control.right > button');

  $airlineProductCount.textContent =
    airlineProductCount === 0 ? `여행 상품이 없습니다` : `목록 ${airlineProductCount}개 항목 포함`;

  $prevBtn.addEventListener('click', () => {
    const width = $carousel.clientWidth;
    currentIndex = -1 * Math.max(0, currentIndex - 1);
    const nextX = currentIndex * width;
    const translate = `translateX(${nextX}px)`;
    $carouselInner.style.transform = translate;

    $nextBtn.ariaDisabled = false;
    $nextBtn.disabled = false;
    if (currentIndex === 0) {
      $prevBtn.disabled = true;
      $prevBtn.ariaDisabled = true;
    }
  });
  $nextBtn.addEventListener('click', () => {
    const width = $carousel.clientWidth;
    currentIndex = Math.min(itemCount - 1, currentIndex + 1);
    const nextX = -1 * currentIndex * width;
    const translate = `translateX(${nextX}px)`;
    $carouselInner.style.transform = translate;

    $prevBtn.ariaDisabled = false;
    $prevBtn.disabled = false;
    if (currentIndex === itemCount - 1) {
      $nextBtn.ariaDisabled = true;
      $nextBtn.disabled = true;
    }
  });
});
