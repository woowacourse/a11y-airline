const passengerInput = document.querySelector(".passenger-count__input");
const passengerMinusButton = document.querySelector(
  ".passenger-count__minus-button"
);
const passengerPlusButton = document.querySelector(
  ".passenger-count__plus-button"
);

passengerMinusButton.addEventListener("click", () => {
  const passengerCount = Number(passengerInput.value);
  if (passengerCount <= 0) return;
  passengerInput.value = passengerCount - 1;
});

passengerPlusButton.addEventListener("click", () => {
  const passengerCount = Number(passengerInput.value);
  if (passengerCount >= 3) return;
  passengerInput.value = passengerCount + 1;
});
