const passengerCountInput = document.querySelector(".passenger__count");
const passengerAddButton = document.querySelector(".-sub");
const passengerSubButton = document.querySelector(".-add");
const hiddenElement = document.querySelector(".hidden");

const handleInputNumberLimitFromOneToThree = (e) => {
  e.target.value = e.target.value.replace(/[^1-3]/g, "1");
};

const subtractPassengerCount = () => {
  if (passengerCountInput.value > 1) {
    passengerCountInput.value--;
  }
  hiddenElement.textContent = `성인 승객 감소 ${passengerCountInput.value}`;
};

const addPassengerCount = () => {
  if (passengerCountInput.value < 3) {
    passengerCountInput.value++;
  }
  hiddenElement.textContent = `성인 승객 증가 ${passengerCountInput.value}`;
};

passengerCountInput.addEventListener(
  "input",
  handleInputNumberLimitFromOneToThree
);
passengerAddButton.addEventListener("click", subtractPassengerCount);
passengerSubButton.addEventListener("click", addPassengerCount);
