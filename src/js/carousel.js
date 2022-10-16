import { $, $$ } from "./dom.js";

let itemIndex = 0;

const transformItemList = () => {
  let translateSize = window.innerWidth > 400 ? -270 : -210;

  $$(".item").forEach((item) => {
    item.animate(
      [{ transform: `translateX(calc((${translateSize}px) * ${itemIndex}))` }],
      {
        duration: 300,
        fill: "forwards",
      }
    );
  });
};

$(".prev-button").addEventListener("click", () => {
  if (itemIndex === 0) return;

  if (itemIndex === 1) $(".prev-button").ariaDisabled = "true";
  if (itemIndex === 6) $(".next-button").ariaDisabled = "false";

  itemIndex -= 1;
  transformItemList();
});

$(".next-button").addEventListener("click", () => {
  if (itemIndex === 6) return;

  if (itemIndex === 5) $(".next-button").ariaDisabled = "true";
  if (itemIndex === 0) $(".prev-button").ariaDisabled = "false";

  itemIndex += 1;
  transformItemList();
});

$$(".item-link").forEach((item) => {
  item.addEventListener("focus", () => {
    const itemId = Number(item.closest("li").dataset.id);
    if (itemId === 7) return;

    itemIndex = itemId;
    if (itemId > 0) transformItemList();
  });
});
