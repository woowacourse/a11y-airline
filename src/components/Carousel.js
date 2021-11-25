import React, { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    document.title = "웹 접근성 미션 | 캐러셀";
  }, []);

  return <div>캐러셀 영역입니다.</div>;
};

export default Carousel;
