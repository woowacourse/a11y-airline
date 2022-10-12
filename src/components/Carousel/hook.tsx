import { useState, useRef } from "react";

const useCarousel = (size: number) => {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  const moveSlide = (targetSlide: number) => {
    if (!slideRef.current) return;

    slideRef.current.scrollTo({
      top: 0,
      left: 300 * targetSlide + (size + 1) * targetSlide,
      behavior: "smooth",
    });
  };

  const handleSlideToPrev = () => {
    if (slide < 1) {
      return;
    }

    setSlide((prev) => {
      const result = prev - 1;
      moveSlide(result);
      return result;
    });
  };

  const handleSlideToNext = () => {
    if (slide > size) {
      return;
    }

    setSlide((prev) => {
      const result = prev + 1;
      moveSlide(result);
      return result;
    });
  };

  return {
    slide,
    slideRef,
    handleSlideToPrev,
    handleSlideToNext,
  };
};

export default useCarousel;
