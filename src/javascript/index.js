const passengerCountInput = document.querySelector(".passenger__count");
const passengerAddButton = document.querySelector(".-sub");
const passengerSubButton = document.querySelector(".-add");

const handleInputNumberLimitFromZeroToThree = (e) => {
  e.target.value = e.target.value.replace(/[^0-3]/g, "0");
};

const subtractPassengerCount = () => {
  if (passengerCountInput.value >= 1) {
    passengerCountInput.value--;
  }
};

const addPassengerCount = () => {
  if (passengerCountInput.value <= 2) {
    passengerCountInput.value++;
  }
};

passengerCountInput.addEventListener(
  "input",
  handleInputNumberLimitFromZeroToThree
);
passengerAddButton.addEventListener("click", subtractPassengerCount);
passengerSubButton.addEventListener("click", addPassengerCount);
