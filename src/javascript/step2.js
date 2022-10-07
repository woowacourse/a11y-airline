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

    this.prevButton.addEventListener("click", this.handleClickPrevButton);
    this.nextButton.addEventListener("click", this.handleClickNextButton);
  }

  template() {
    return `
    <h1>지금 떠나기 좋은 여행</h1>
      <div class="carousel__wrap">
        <section class="carousel" role="list">
          ${this.slideList.map((slide) => `${slide}`).join("")}
        </section>
        <button class="prev" aria-label="이전 버튼 (사용 중지)" aria-disabled="true">&lt;</button>
        <button class="next" aria-label="다음 버튼" aria-disabled="false">&gt;</button>
      </div>`;
  }

  handleClickPrevButton = (e) => {
    this.currentIndex--;

    if (this.currentIndex < 2) {
      this.currentIndex = 1;

      this.prevButton.setAttribute("aria-disabled", "true");
      this.prevButton.setAttribute("aria-label", "이전 버튼 (사용 중지)");
      this.slides.forEach(
        (slide) =>
          (slide.style.transform = `translateX(-${
            this.SLIDE_SIZE * (this.currentIndex - 1)
          }px)`)
      );
      return;
    }

    this.nextButton.setAttribute("aria-disabled", "false");
    this.prevButton.setAttribute("aria-label", "이전 버튼");
    this.nextButton.setAttribute("aria-label", "다음 버튼");

    this.slides.forEach(
      (slide) =>
        (slide.style.transform = `translateX(-${
          this.SLIDE_SIZE * (this.currentIndex - 1)
        }px)`)
    );
  };

  handleClickNextButton = (e) => {
    this.currentIndex++;

    if (this.currentIndex > 6) {
      this.currentIndex = 7;

      this.nextButton.setAttribute("aria-disabled", "true");
      this.nextButton.setAttribute("aria-label", "다음 버튼 (사용 중지)");
      this.slides.forEach(
        (slide) =>
          (slide.style.transform = `translateX(-${
            this.SLIDE_SIZE * (this.currentIndex - 1)
          }px)`)
      );
      return;
    }

    this.prevButton.setAttribute("aria-disabled", "false");
    this.prevButton.setAttribute("aria-label", "이전 버튼");
    this.nextButton.setAttribute("aria-label", "다음 버튼");

    this.slides.forEach(
      (slide) =>
        (slide.style.transform = `translateX(-${
          this.SLIDE_SIZE * (this.currentIndex - 1)
        }px)`)
    );
  };
}

export default Step2;
