import React from "react";
import PromotionListItem from "./components/PromotionListItem/PromotionListItem";
import "./PromotionList.css";

function PromotionList() {
  return (
    <div class="layout-container">
      <div class="container">
        <h2>지금 떠나기 좋은 여행</h2>

        <div class="card-container">
          <ul class="cards">
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg"
              departure="서울/인천"
              arrival="두바이"
              seat="일반석 왕복"
              price="KRW 1,157,500 ~"
            />
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FUK-list-pc.jpg"
              departure="서울/인천"
              arrival="후쿠오카"
              seat="일반석 왕복"
              price="KRW 340,200 ~"
            />
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HKT-list-pc.jpg"
              departure="서울/인천"
              arrival="푸껫"
              seat="일반석 왕복"
              price="KRW 704,100 ~"
            />
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/CNX-list-pc.jpg"
              departure="서울/인천"
              arrival="치앙마이"
              seat="일반석 왕복"
              price="KRW 839,100 ~"
            />
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/BCN-list-pc.jpg"
              departure="서울/인천"
              arrival="바르셀로나"
              seat="일반석 왕복"
              price="KRW 1,546,300 ~"
            />
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HAN-list-pc.jpg"
              departure="서울/인천"
              arrival="하노이"
              seat="일반석 왕복"
              price="KRW 486,900 ~"
            />
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FCO-list-pc.jpg"
              departure="서울/인천"
              arrival="로마/레오나르도"
              seat="일반석 왕복"
              price="KRW 1,454,200 ~"
            />
            <PromotionListItem
              img="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HNL-list-pc.jpg"
              departure="서울/인천"
              arrival="호놀룰루 (하와이)"
              seat="일반석 왕복"
              price="KRW 1,243,800 ~"
            />
          </ul>
        </div>
        <div class="buttons">
          <button class="gallery-button prev">
            <span class="invisible">이전</span>
          </button>
          <button class="gallery-button next">
            <span class="invisible">다음</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromotionList;
