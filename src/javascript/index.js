const passengerCountInput = document.querySelector(".passenger__count");
const passengerAddButton = document.querySelector(".-add");
const passengerSubButton = document.querySelector(".-sub");
const hiddenElement = document.querySelector(".hidden");
const tooltipOpenButton = document.querySelector(".tooltip__open");
const tooltipCloseButton = document.querySelector(".tooltip__close");
const tooltipText = document.querySelector(".tooltip__text");

const passengerAddButtonDisabled = () => {
  passengerSubButton.setAttribute("aria-disabled", "false");
  passengerAddButton.setAttribute("aria-disabled", "true");
};

const passengerSubButtonDisabled = () => {
  passengerSubButton.setAttribute("aria-disabled", "true");
  passengerAddButton.setAttribute("aria-disabled", "false");
};

const initButtonStatus = () => {
  passengerSubButton.setAttribute("aria-disabled", "false");
  passengerAddButton.setAttribute("aria-disabled", "false");
};

const handleInputNumber = (e) => {
  const inputNumber = e.target.value;
  initButtonStatus();

  if (inputNumber === "") {
    return;
  }

  if (inputNumber < 1 || inputNumber > 3) {
    alert("성인 승객은 1명부터 3명까지만 입력 가능합니다.");
    passengerSubButtonDisabled();
  }

  if (passengerCountInput.value === "1") {
    passengerSubButtonDisabled();
  }

  if (passengerCountInput.value === "3") {
    passengerAddButtonDisabled();
  }

  e.target.value = inputNumber.replace(/[^1-3]/g, "1").replace(/[1]/g, "1");
};

const handleInputChange = () => {
  hiddenElement.textContent = `성인 ${passengerCountInput.value} 텍스트 숫자만 수정`;
};

const subtractPassengerCount = () => {
  if (passengerCountInput.value > 1) {
    passengerCountInput.value--;
  }

  initButtonStatus();

  if (passengerCountInput.value === "1") {
    passengerSubButtonDisabled();
  }

  hiddenElement.textContent = `성인 승객 감소 ${passengerCountInput.value}`;
};

const addPassengerCount = () => {
  if (passengerCountInput.value < 3) {
    passengerCountInput.value++;
  }

  initButtonStatus();

  if (passengerCountInput.value === "3") {
    passengerAddButtonDisabled();
  }

  hiddenElement.textContent = `성인 승객 증가 ${passengerCountInput.value}`;
};

const toggleTooltip = () => {
  if (tooltipText.classList.contains("display-hidden")) {
    showTooltip();
    return;
  }
  hideTooltip();
};

const showTooltip = () => {
  tooltipText.classList.remove("display-hidden");
  tooltipText.classList.add("display-visible");
  tooltipOpenButton.setAttribute("aria-expanded", true);
};

const hideTooltip = () => {
  tooltipText.classList.remove("display-visible");
  tooltipText.classList.add("display-hidden");
  tooltipOpenButton.setAttribute("aria-expanded", false);
};

passengerCountInput.addEventListener("input", handleInputNumber);
passengerCountInput.addEventListener("change", handleInputChange);
passengerAddButton.addEventListener("click", addPassengerCount);
passengerSubButton.addEventListener("click", subtractPassengerCount);
tooltipOpenButton.addEventListener("click", toggleTooltip);
tooltipCloseButton.addEventListener("click", hideTooltip);
