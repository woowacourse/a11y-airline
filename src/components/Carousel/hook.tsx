import { useState, useRef, useEffect } from "react";

const useCarousel = (size: number) => {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  const handleSlideToPrev = () => {
    if (slide < 1) {
      return;
    }

    setSlide((prev) => prev - 1);
  };

  const handleSlideToNext = () => {
    if (slide > size) {
      return;
    }

    setSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (!slideRef.current) return;

    slideRef.current.scrollTo({
      top: 0,
      left: 300 * slide + (size + 1) * slide,
      behavior: "smooth",
    });
  }, [slide]);

  return {
    slide,
    slideRef,
    handleSlideToPrev,
    handleSlideToNext,
  };
};

export default useCarousel;
