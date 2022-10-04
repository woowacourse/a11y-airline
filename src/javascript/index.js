const passengerCountInput = document.querySelector(".passenger__count");
const passengerAddButton = document.querySelector(".-sub");
const passengerSubButton = document.querySelector(".-add");
const hiddenElement = document.querySelector(".hidden");

const handleInputNumberLimitFromOneToThree = (e) => {
  const inputNumber = e.target.value;

  if (inputNumber === "") {
    return;
  }

  if (inputNumber < 1 || inputNumber > 3) {
    alert("성인 승객은 1명부터 3명까지만 입력 가능합니다.");
  }

  e.target.value = inputNumber.replace(/[^1-3]/g, "1");
};

const handleInputChange = () => {
  hiddenElement.textContent = `성인 ${passengerCountInput.value} 텍스트 숫자만 수정`;
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
passengerCountInput.addEventListener("change", handleInputChange);
passengerAddButton.addEventListener("click", subtractPassengerCount);
passengerSubButton.addEventListener("click", addPassengerCount);
