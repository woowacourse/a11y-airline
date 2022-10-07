import { $, $$ } from "./util.js";
import slideList from "./slide.js";

class Step2 {
  constructor() {
    this.slideList = slideList;
    this.currentIndex = 1;
    this.SLIDE_SIZE = 260;

    $("#app").innerHTML = this.template();

    this.prevButton = $(".prev");
    this.nextButton = $(".next");
    this.slides = $$(".slide");
    this.slideLinks = $$(".slide__link");

    this.prevButton.addEventListener("click", this.handleClickPrevButton);
    this.nextButton.addEventListener("click", this.handleClickNextButton);
    this.slideLinks.forEach((slideLink) =>
      slideLink.addEventListener("focus", this.handleAnchorFocus)
    );
  }

  template() {
    return `
    <h1 class="carousel__header">지금 떠나기 좋은 여행</h1>
      <div class="carousel__wrap">
        <section class="carousel" role="list">
          ${this.slideList.map((slide) => `${slide}`).join("")}
        </section>
        <button class="prev" aria-label="이전 버튼 (사용 중지)" aria-disabled="true">&lt;</button>
        <button class="next" aria-label="다음 버튼" aria-disabled="false">&gt;</button>
      </div>`;
  }

  handleClickPrevButton = () => {
    this.currentIndex--;

    if (this.currentIndex < 2) {
      this.currentIndex = 1;

      this.moveSlide();
      this.disablePrevButton();
      return;
    }

    this.enableButton("next");
    this.moveSlide();
  };

  handleClickNextButton = () => {
    this.currentIndex++;

    if (this.currentIndex > 6) {
      this.currentIndex = 7;

      this.moveSlide();
      this.disableNextButton();
      return;
    }

    this.enableButton("prev");
    this.moveSlide();
  };

  handleAnchorFocus = (e) => {
    this.currentIndex = e.target.dataset.id;
    console.log(`curIndex: ${this.currentIndex}`);
    if (this.currentIndex === "8") return;

    if (this.currentIndex === "1") {
      this.moveSlide();
      this.disablePrevButton();
      return;
    }

    if (this.currentIndex === "2") {
      this.moveSlide();
      this.enableButton("prev");
      return;
    }

    if (this.currentIndex === "6") {
      this.moveSlide();
      this.enableButton("next");
      return;
    }

    if (this.currentIndex === "7") {
      this.moveSlide();
      this.disableNextButton();
      return;
    }

    this.moveSlide();
  };

  enableButton = (role) => {
    this.prevButton.setAttribute("aria-label", "이전 버튼");
    this.nextButton.setAttribute("aria-label", "다음 버튼");

    if (!(role === "next" || role === "prev")) return;

    if (role === "prev") {
      this.prevButton.setAttribute("aria-disabled", "false");
      return;
    }

    if (role === "next") {
      this.nextButton.setAttribute("aria-disabled", "false");
      return;
    }
  };

  disablePrevButton = () => {
    this.prevButton.setAttribute("aria-disabled", "true");
    this.prevButton.setAttribute("aria-label", "이전 버튼 (사용 중지)");
  };

  disableNextButton = () => {
    this.nextButton.setAttribute("aria-disabled", "true");
    this.nextButton.setAttribute("aria-label", "다음 버튼 (사용 중지)");
  };

  moveSlide = () => {
    this.slides.forEach(
      (slide) =>
        (slide.style.transform = `translateX(-${
          this.SLIDE_SIZE * (this.currentIndex - 1)
        }px)`)
    );
  };
}

export default Step2;
