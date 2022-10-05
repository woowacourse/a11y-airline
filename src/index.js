const passengerInput = document.querySelector(".passenger-count__input");
const passengerMinusButton = document.querySelector(
  ".passenger-count__minus-button"
);
const passengerPlusButton = document.querySelector(
  ".passenger-count__plus-button"
);
const statusMessage = document.querySelector(".status-message");

passengerInput.addEventListener("input", ({ target }) => {
  if (target.value < 1 || target.value > 3) {
    passengerInput.value = 1;
    return;
  }

  statusMessage.textContent = `성인 ${passengerInput.value} 텍스트 숫자만 수정`;
});

passengerMinusButton.addEventListener("click", () => {
  const passengerCount = Number(passengerInput.value);
  if (passengerCount <= 1) return;
  passengerInput.value = passengerCount - 1;
  statusMessage.textContent = `성인 승객 감소 ${passengerInput.value}`;
});

passengerPlusButton.addEventListener("click", () => {
  const passengerCount = Number(passengerInput.value);
  if (passengerCount >= 3) return;
  passengerInput.value = passengerCount + 1;
  statusMessage.textContent = `성인 승객 추가 ${passengerInput.value}`;
});
