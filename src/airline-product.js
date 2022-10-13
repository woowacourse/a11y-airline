import debounce from './debounce';

document.addEventListener('DOMContentLoaded', () => {
  const $carousel = document.querySelector('.carousel');
  const $prevBtn = $carousel.querySelector('.carousel-control.left');
  const $nextBtn = $carousel.querySelector('.carousel-control.right');

  const debouncer = debounce(200);

  $prevBtn.addEventListener('click', () => {
    const width = $carousel.clientWidth;
    debouncer(() => {
      $carousel.scrollBy({ left: -1 * width, behavior: 'smooth' });
    });
  });
  $nextBtn.addEventListener('click', () => {
    const width = $carousel.clientWidth;
    debouncer(() => {
      $carousel.scrollBy({ left: width, behavior: 'smooth' });
    });
  });
});
