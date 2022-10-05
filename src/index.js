const PASSENGER_AMOUNT = {
  MIN: 1,
  MAX: 3,
};

const $ = (select) => document.querySelector(select);

const passengerAmountInput = $("#passenger-amount-input");
const inputStatus = $("#input-status");

$(".increment-button").addEventListener("click", () => {
  if (passengerAmountInput.value < PASSENGER_AMOUNT.MAX) {
    passengerAmountInput.value++;
    inputStatus.textContent = `성인 승객 추가 ${passengerAmountInput.value}`;
  }
});
