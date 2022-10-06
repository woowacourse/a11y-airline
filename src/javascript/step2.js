import { $ } from "./util.js";
import slideList from "./slide.js";

class Step2 {
  constructor() {
    this.slideList = slideList;

    $("#app").innerHTML = this.template();

    this.carousel = $(".carousel");

    $(".prev").addEventListener("click", this.handleClickPrevButton);
    $(".next").addEventListener("click", this.handleClickNextButton);
  }

  template() {
    return `
    <h1>지금 떠나기 좋은 여행</h1>
      <div class="carousel__wrap">
        <section class="carousel" role="list">
          ${this.slideList.map((slide) => `${slide}`).join("")}
        </section>
        <button class="prev" aria-label="이전 버튼">&lt;</button>
        <button class="next" aria-label="다음 버튼">&gt;</button>
      </div>`;
  }

  render() {
    const template = this.slideList.map((slide) => slide).join("");

    this.carousel.replaceChildren();
    this.carousel.insertAdjacentHTML("afterbegin", template);
  }

  handleClickPrevButton = () => {
    this.slideList.unshift(this.slideList.pop());

    this.render();
  };

  handleClickNextButton = () => {
    this.slideList.push(this.slideList.shift());
    this.render();
  };
}

export default Step2;
