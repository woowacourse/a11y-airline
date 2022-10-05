const PASSENGER_AMOUNT = {
  MIN: 1,
  MAX: 3,
};

const $ = (select) => document.querySelector(select);

const passengerAmountInput = $("#passenger-amount-input");
const inputStatus = $("#input-status");

passengerAmountInput.addEventListener("input", (e) => {
  const target = Number(e.target.value);
  if (target === 0) {
    return;
  }

  if (target < PASSENGER_AMOUNT.MIN || target > PASSENGER_AMOUNT.MAX) {
    alert("범위를 벗어나므로 초기값인 1로 변경됩니다.");
    e.target.value = PASSENGER_AMOUNT.MIN;
  }
});

$(".decrement-button").addEventListener("click", () => {
  if (passengerAmountInput.value > PASSENGER_AMOUNT.MIN) {
    passengerAmountInput.value--;
    inputStatus.textContent = `성인 승객 감소 ${passengerAmountInput.value}`;
  }
});

$(".increment-button").addEventListener("click", () => {
  if (passengerAmountInput.value < PASSENGER_AMOUNT.MAX) {
    passengerAmountInput.value++;
    inputStatus.textContent = `성인 승객 추가 ${passengerAmountInput.value}`;
  }
});
