let itemIndex = 0;

const transformItemList = () => {
  document.querySelectorAll('.item').forEach((item) => {
    item.animate(
      [
        {
          transform: `translateX(calc((-270px) * ${itemIndex}))`,
        },
      ],
      {
        duration: 300,
        fill: 'forwards',
      }
    );
  });
};

document.querySelector('.prev-button').addEventListener('click', () => {
  if (itemIndex === 0) return;

  if (itemIndex === 1)
    document.querySelector('.prev-button').ariaDisabled = 'true';
  if (itemIndex === 6)
    document.querySelector('.next-button').ariaDisabled = 'false';

  itemIndex -= 1;
  transformItemList();
});

document.querySelector('.next-button').addEventListener('click', () => {
  if (itemIndex === 6) return;

  if (itemIndex === 5)
    document.querySelector('.next-button').ariaDisabled = 'true';
  if (itemIndex === 0)
    document.querySelector('.prev-button').ariaDisabled = 'false';

  itemIndex += 1;
  transformItemList();
});

document.querySelectorAll('.item-link').forEach((item) => {
  item.addEventListener('focus', () => {
    const itemId = Number(item.closest('li').dataset.id);
    if (itemId === 7) return;

    itemIndex = itemId;
    if (itemId > 0) transformItemList();
  });
});
