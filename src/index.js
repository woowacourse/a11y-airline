const passengerInput = document.querySelector(".passenger-count__input");
const passengerMinusButton = document.querySelector(
  ".passenger-count__minus-button"
);
const passengerPlusButton = document.querySelector(
  ".passenger-count__plus-button"
);

passengerInput.addEventListener("input", ({ target }) => {
  if (target.value > 3 || target.value < 1) {
    passengerInput.value = 0;
    return;
  }
});

passengerMinusButton.addEventListener("click", () => {
  if (passengerCount <= 1) return;
  passengerInput.value = Number(passengerInput.value) - 1;
});

passengerPlusButton.addEventListener("click", () => {
  if (passengerInput.value >= 3) return;
  passengerInput.value = Number(passengerInput.value) + 1;
});
