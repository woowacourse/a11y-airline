import $ from "./util.js";

class Step1 {
  constructor() {
    $("#app").innerHTML = this.template();

    this.passengerCountInput = $(".passenger__count");
    this.passengerAddButton = $(".-add");
    this.passengerSubButton = $(".-sub");
    this.hiddenElement = $(".hidden");
    this.tooltipOpenButton = $(".tooltip__open");
    this.tooltipCloseButton = $(".tooltip__close");
    this.tooltipText = $(".tooltip__text");

    this.passengerCountInput.addEventListener("input", this.handleInputNumber);
    this.passengerCountInput.addEventListener("change", this.handleInputChange);
    this.passengerAddButton.addEventListener("click", this.addPassengerCount);
    this.passengerSubButton.addEventListener(
      "click",
      this.subtractPassengerCount
    );
    this.tooltipOpenButton.addEventListener("click", this.toggleTooltip);
    this.tooltipCloseButton.addEventListener("click", this.hideTooltip);
  }

  template = () => {
    return `<h1>승객 선택</h1>
    <section>
      <div class="passenger__title">
        <h2 class="passenger__label">성인</h2>
        <button class="adult__count tooltip__open">성인 기준 상세 안내</button>
        <div class="tooltip__text display-hidden" role="tooltip">
          <span>국제선 만 12세 이상, 국내선 만 13세 이상</span>
          <button class="tooltip__close">닫기</button>
        </div>
      </div>
      <div class="passenger__controls">
        <button
          class="passenger__control -sub"
          type="button"
          aria-disabled="true"
        >
          성인 탑승자 한명 줄이기
        </button>
        <input
          class="passenger__count"
          type="tel"
          maxlength="1"
          value="1"
          aria-label="성인"
        />
        <button
          class="passenger__control -add"
          type="button"
          aria-disabled="false"
        >
          성인 탑승자 한명 늘리기
        </button>
        <div class="hidden" aria-live="polite"></div>
      </div>
    </section>`;
  };

  passengerAddButtonDisabled = () => {
    this.passengerSubButton.setAttribute("aria-disabled", "false");
    this.passengerAddButton.setAttribute("aria-disabled", "true");
  };

  passengerSubButtonDisabled = () => {
    this.passengerSubButton.setAttribute("aria-disabled", "true");
    this.passengerAddButton.setAttribute("aria-disabled", "false");
  };

  initButtonStatus = () => {
    this.passengerSubButton.setAttribute("aria-disabled", "false");
    this.passengerAddButton.setAttribute("aria-disabled", "false");
  };

  handleInputNumber = (e) => {
    const inputNumber = e.target.value;
    this.initButtonStatus();

    if (inputNumber === "") {
      return;
    }

    if (inputNumber < 1 || inputNumber > 3) {
      alert("성인 승객은 1명부터 3명까지만 입력 가능합니다.");
      this.passengerSubButtonDisabled();
    }

    if (this.passengerCountInput.value === "1") {
      this.passengerSubButtonDisabled();
    }

    if (this.passengerCountInput.value === "3") {
      this.passengerAddButtonDisabled();
    }

    e.target.value = inputNumber.replace(/[^1-3]/g, "1").replace(/[1]/g, "1");
  };

  handleInputChange = () => {
    this.hiddenElement.textContent = `성인 ${this.passengerCountInput.value} 텍스트 숫자만 수정`;
  };

  subtractPassengerCount = () => {
    if (this.passengerCountInput.value > 1) {
      this.passengerCountInput.value--;
    }

    this.initButtonStatus();

    if (this.passengerCountInput.value === "1") {
      this.passengerSubButtonDisabled();
    }

    this.hiddenElement.textContent = `성인 승객 감소 ${this.passengerCountInput.value}`;
  };

  addPassengerCount = () => {
    if (this.passengerCountInput.value < 3) {
      this.passengerCountInput.value++;
    }

    this.initButtonStatus();

    if (this.passengerCountInput.value === "3") {
      this.passengerAddButtonDisabled();
    }

    this.hiddenElement.textContent = `성인 승객 증가 ${this.passengerCountInput.value}`;
  };

  toggleTooltip = () => {
    if (this.tooltipText.classList.contains("display-hidden")) {
      this.showTooltip();
      return;
    }
    this.hideTooltip();
  };

  showTooltip = () => {
    this.tooltipText.classList.remove("display-hidden");
    this.tooltipText.classList.add("display-visible");
    this.tooltipOpenButton.setAttribute("aria-expanded", true);
  };

  hideTooltip = () => {
    this.tooltipText.classList.remove("display-visible");
    this.tooltipText.classList.add("display-hidden");
    this.tooltipOpenButton.setAttribute("aria-expanded", false);
  };
}

export default Step1;
