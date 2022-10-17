import Dubai from "../images/Dubai.jpg";
import Fukuoka from "../images/Fukuoka.jpg";
import Phuket from "../images/Phuket.jpg";
import ChiangMai from "../images/ChiangMai.jpg";
import Barcelona from "../images/Barcelona.jpg";
import Hanoi from "../images/Hanoi.jpg";
import Rome from "../images/Rome.jpg";
import Honolulu from "../images/Honolulu.jpg";
import { announce, getTranslateX } from "./utils";

const carouselItems = [
  {
    src: Dubai,
    alt: "서울 또는 인천에서 두바이로",
    title: "서울/인천 - 두바이",
    seat: "일반석 왕복",
    price: "1,158,000",
  },
  {
    src: Fukuoka,
    alt: "서울 또는 인천에서 후쿠오카로",
    title: "서울/인천 - 후쿠오카",
    seat: "일반석 왕복",
    price: "340,400",
  },
  {
    src: Phuket,
    alt: "서울 또는 인천에서 푸껫으로",
    title: "서울/인천 - 푸껫",
    seat: "일반석 왕복",
    price: "704,100",
  },
  {
    src: ChiangMai,
    alt: "서울 또는 인천에서 치앙마이로",
    title: "서울/인천 - 치앙마이",
    seat: "일반석 왕복",
    price: "839,100",
  },
  {
    src: Barcelona,
    alt: "서울 또는 인천에서 바르셀로나로",
    title: "서울/인천 - 바르셀로나",
    seat: "일반석 왕복",
    price: "1,546,300",
  },
  {
    src: Hanoi,
    alt: "서울 또는 인천에서 하노이로",
    title: "서울/인천 - 하노이",
    seat: "일반석 왕복",
    price: "527,500",
  },
  {
    src: Rome,
    alt: "서울 또는 인천에서 로마로",
    title: "서울/인천 - 로마",
    seat: "일반석 왕복",
    price: "1,454,200",
  },
  {
    src: Honolulu,
    alt: "서울 또는 인천에서 호놀룰루로",
    title: "서울/인천 - 호놀룰루",
    seat: "일반석 왕복",
    price: "1,244,900",
  },
];

const widthPerItem = 240;

const carouselWrapper = document.querySelector(
  "#carousel-wrapper"
) as HTMLElement;

function renderCarousel() {
  carouselItems.forEach((v, i) => {
    const listItem = document.createElement("li");
    listItem.tabIndex = i;
    const linkButton = document.createElement("a");
    linkButton.ariaLabel = `${v.title} ${v.seat} ${v.price} 대한민국 원`;

    const item = document.createElement("img");
    item.src = v.src;
    item.alt = v.alt;

    const description = document.createElement("div");
    description.className = "description";

    const titleDescription = document.createElement("p");
    titleDescription.className = "title";
    titleDescription.textContent = v.title;

    const seatDescription = document.createElement("p");
    seatDescription.className = "seat";
    seatDescription.textContent = v.seat;

    const priceDescription = document.createElement("p");
    priceDescription.className = "price";
    priceDescription.textContent = `KRW ${v.price.toLocaleString()} ~`;
    priceDescription.ariaLabel = `${v.price.toLocaleString()} 대한민국 원`;

    description.insertAdjacentElement("beforeend", titleDescription);
    description.insertAdjacentElement("beforeend", seatDescription);
    description.insertAdjacentElement("beforeend", priceDescription);
    linkButton.insertAdjacentElement("beforeend", item);
    linkButton.insertAdjacentElement("beforeend", description);
    listItem.insertAdjacentElement("beforeend", linkButton);
    carouselWrapper.insertAdjacentElement("beforeend", listItem);
  });
}

const leftButton = document.querySelector("#left-button") as HTMLButtonElement;
const rightButton = document.querySelector(
  "#right-button"
) as HTMLButtonElement;

leftButton.disabled = true;

leftButton.addEventListener("click", () => {
  const currentX = getTranslateX(carouselWrapper);

  rightButton.disabled = false;
  carouselWrapper.style.transform = `translateX(${currentX + widthPerItem}px)`;

  if (currentX + widthPerItem >= 0) {
    announce(`목록의 시작입니다.`);
    leftButton.disabled = true;
  }
});

rightButton.addEventListener("click", () => {
  const currentX = getTranslateX(carouselWrapper);

  leftButton.disabled = false;
  carouselWrapper.style.transform = `translateX(${currentX - widthPerItem}px)`;

  if (currentX - widthPerItem <= -(widthPerItem * 6)) {
    announce(`목록의 끝입니다.`);
    rightButton.disabled = true;
  }
});

renderCarousel();
