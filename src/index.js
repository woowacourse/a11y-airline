const passengerInput = document.querySelector(".passenger-count__input");
const passengerMinusButton = document.querySelector(
  ".passenger-count__minus-button"
);
const passengerPlusButton = document.querySelector(
  ".passenger-count__plus-button"
);

passengerInput.addEventListener("input", (e) => {
  if (e.target.value > 3) {
    passengerInput.value = 3;
    return;
  }
});

passengerMinusButton.addEventListener("click", () => {
  const passengerCount = Number(passengerInput.value);
  if (passengerCount <= 1) return;
  passengerInput.value = passengerCount - 1;
});

passengerPlusButton.addEventListener("click", () => {
  const passengerCount = Number(passengerInput.value);
  if (passengerCount >= 3) return;
  passengerInput.value = passengerCount + 1;
});
