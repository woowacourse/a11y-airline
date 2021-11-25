import React, { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    document.title = "웹 접근성 미션 | 네비게이션";
  }, []);

  return <div>네비게이션 영역입니다.</div>;
};

export default Navigation;
